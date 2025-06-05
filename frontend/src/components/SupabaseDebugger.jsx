import { useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

export default function SupabaseDebugger() {
  useEffect(() => {
    const testSupabase = async () => {
      console.log("✅ Running Supabase debug check...");

      try {
        // 1. Check if keys work
        const { data: userData, error: userError } = await supabase.auth.getUser();
        console.log("🔍 Current User:", userData, userError);

        // 2. Try a simple dummy read (e.g., from 'ideas')
        const { data: ideasData, error: ideasError } = await supabase.from("ideas").select("*").limit(1);
        console.log("📦 Dummy ideas read:", ideasData, ideasError);

      } catch (err) {
        console.error("❌ Supabase exploded:", err);
      }
    };

    testSupabase();
  }, []);

  return (
    <div className="p-4 bg-yellow-100 text-yellow-800 rounded mb-4">
      <p>Supabase Debugger is running. Check the browser console (F12 → Console tab).</p>
    </div>
  );
}
