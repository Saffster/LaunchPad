// src/utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fkhdrdodcgivfyqsemfs.supabase.co'  // your Project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZraGRyZG9kY2dpdmZ5cXNlbWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MjI5MjcsImV4cCI6MjA2NDQ5ODkyN30.PbAlmg1HEhahVWZ2eDsnFVfQrYCfIICjrEaaM10sl_U'     // your anon key

export const supabase = createClient(supabaseUrl, supabaseKey)
