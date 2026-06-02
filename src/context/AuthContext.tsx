import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

import type { Session, User } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { supabase } from '../services/supabase/supabase';

type AuthContextValue = {
  session: Session | null;
  user: User | null;
  role: string | null;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextValue>({
  session: null,
  user: null,
  role: null,
  loading: true,
});

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const AUTH_SESSION_KEY = '@MyApp:authSession';
  const AUTH_USER_KEY = '@MyApp:authUser';
  const AUTH_ROLE_KEY = '@MyApp:userRole';

  const persistAuthData = async (
    sessionValue: Session | null,
    roleValue: string | null
  ) => {
    try {
      await AsyncStorage.setItem(
        AUTH_SESSION_KEY,
        JSON.stringify(sessionValue)
      );
      await AsyncStorage.setItem(
        AUTH_USER_KEY,
        JSON.stringify(sessionValue?.user ?? null)
      );
      await AsyncStorage.setItem(
        AUTH_ROLE_KEY,
        roleValue ?? ''
      );
    } catch (error) {
      console.warn('Gagal menyimpan auth ke AsyncStorage', error);
    }
  };

  const fetchUserRole = async (userId: string) => {
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('auth_id', userId)
      .single();

    if (error || !data) {
      return null;
    }

    return data.role as string | null;
  };

  useEffect(() => {
    const initSession = async () => {
      const { data } = await supabase.auth.getSession();
      const currentSession = data?.session ?? null;
      const currentUser = currentSession?.user ?? null;
      const currentRole = currentUser
        ? await fetchUserRole(currentUser.id)
        : null;

      setSession(currentSession);
      setUser(currentUser);
      setRole(currentRole);
      await persistAuthData(currentSession, currentRole);
      setLoading(false);
    };

    initSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_, session) => {
      const currentUser = session?.user ?? null;
      const currentRole = currentUser
        ? await fetchUserRole(currentUser.id)
        : null;

      setSession(session);
      setUser(currentUser);
      setRole(currentRole);
      await persistAuthData(session, currentRole);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ session, user, role, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
