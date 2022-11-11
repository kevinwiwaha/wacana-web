import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://afqfpiwkbiscwbwkpvat.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmcWZwaXdrYmlzY3did2twdmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc3NTQxNTEsImV4cCI6MTk4MzMzMDE1MX0.C1wxNygib3N2O3sZnRs-YoOHBpYsRI4KiQte9m1NVgw')