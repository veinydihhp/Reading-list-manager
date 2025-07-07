import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fwycajsunvqccnajkhks.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3eWNhanN1bnZxY2NuYWpraGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MTc5MTAsImV4cCI6MjA2NzM5MzkxMH0.3azbQRi6i4G_EfBcrfD6d1ZWC-qOEPA0DtkpSzUGQbk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
