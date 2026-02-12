import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  business_type: string;
  message?: string;
}

export async function submitContactForm(data: ContactSubmission) {
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }

  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) {
    throw error;
  }

  return result;
}
