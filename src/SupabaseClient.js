import { createClient } from "@supabase/supabase-js";

// Create a single Supabase client for interacting with your database
export const supabase = createClient(
 import.meta.env.VITE_SUPABASE_URL,
 import.meta.env.VITE_ANON_KEY
);
