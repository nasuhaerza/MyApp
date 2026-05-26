import React, {
  createContext,
  useEffect,
  useState,
} from 'react';

import { supabase }
from '../services/supabase/supabase';

export const RequestContext =
  createContext<any>(null);

export default function RequestProvider({
  children,
}: any) {

  const [requests, setRequests] =
    useState<any[]>([]);

  useEffect(() => {

    fetchRequests();

    const channel =
      supabase
        .channel('volunteer_requests')

        .on(
          'postgres_changes',

          {
            event: '*',
            schema: 'public',
            table: 'volunteer_requests',
          },

          () => {
            fetchRequests();
          }
        )

        .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };

  }, []);

  const fetchRequests = async () => {

    const { data } =
      await supabase
        .from('volunteer_requests')
        .select('*');

    if (data) {
      setRequests(data);
    }
  };

  return (
    <RequestContext.Provider
      value={{ requests }}
    >
      {children}
    </RequestContext.Provider>
  );
}