import 'react-native-url-polyfill/auto';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  'https://drveldcuqyxkeebskmah.supabase.co/';

const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRydmVsZGN1cXl4a2VlYnNrbWFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NjQ3MzcsImV4cCI6MjA5NTM0MDczN30.4XgnuIS3E9gqMVFxW2_0r1SZTRwcEdPBeIob5n0SPjI';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);