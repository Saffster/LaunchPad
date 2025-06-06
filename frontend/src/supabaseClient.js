import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl) {
  throw new Error(
    "Missing VITE_SUPABASE_URL environment variable. " +
      "Please create a .env file in the root directory with your Supabase URL. " +
      "See .env.example for the required format.",
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    "Missing VITE_SUPABASE_ANON_KEY environment variable. " +
      "Please add your Supabase anonymous key to the .env file. " +
      "See .env.example for the required format.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
