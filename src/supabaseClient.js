import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uhinnkrwexttvvvfdzgy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoaW5ua3J3ZXh0dHZ2dmZkemd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyMjc1MjQsImV4cCI6MjAzODgwMzUyNH0.whMdKBY0d8UyiMFRd1YfWIMNiMjDtQkbobdMp5nA0Ao';

export const supabase = createClient(supabaseUrl, supabaseKey);
