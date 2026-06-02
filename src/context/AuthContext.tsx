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
  loading: boolean;
};

export const AuthContext = createContext<AuthContextValue>({
  session: null,
  user: null,
  loading: true,
});

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const AUTH_SESSION_KEY = '@MyApp:authSession';
  const AUTH_USER_KEY = '@MyApp:authUser';

  const persistAuthData = async (sessionValue: Session | null) => {
    try {
      await AsyncStorage.setItem(
        AUTH_SESSION_KEY,
        JSON.stringify(sessionValue)
      );
      await AsyncStorage.setItem(
        AUTH_USER_KEY,
        JSON.stringify(sessionValue?.user ?? null)
      );
    } catch (error) {
      console.warn('Gagal menyimpan auth ke AsyncStorage', error);
    }
  };

  useEffect(() => {
    const initSession = async () => {
      const { data } = await supabase.auth.getSession();
      const currentSession = data?.session ?? null;
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      await persistAuthData(currentSession);
      setLoading(false);
    };

    initSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      await persistAuthData(session);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
