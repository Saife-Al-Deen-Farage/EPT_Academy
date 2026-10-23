import type { AuthError, Session, User } from '@supabase/supabase-js';
import { requireSupabase } from './supabase';

export type EptProfile = {
  id: string; full_name: string; phone: string | null; email: string;
  role: 'student' | 'admin';
  account_status: 'pending' | 'approved' | 'rejected' | 'suspended';
};
export type AuthResult = { user: User | null; session: Session | null; error: AuthError | null };

/** The database trigger creates the new student's pending profile. */
export async function registerStudent(input: { fullName: string; phone: string; email: string; password: string }): Promise<AuthResult> {
  const client = requireSupabase();
  const { data, error } = await client.auth.signUp({
    email: input.email.trim().toLowerCase(), password: input.password,
    options: { data: { full_name: input.fullName.trim(), phone: input.phone.trim() } },
  });
  return { user: data.user, session: data.session, error };
}

export async function signInStudent(email: string, password: string): Promise<AuthResult> {
  const client = requireSupabase();
  const { data, error } = await client.auth.signInWithPassword({ email: email.trim().toLowerCase(), password });
  return { user: data.user, session: data.session, error };
}

export async function getCurrentProfile(): Promise<EptProfile | null> {
  const client = requireSupabase();
  const { data: authData, error: authError } = await client.auth.getUser();
  if (authError || !authData.user) return null;
  const { data, error } = await client.from('profiles')
    .select('id, full_name, phone, email, role, account_status')
    .eq('id', authData.user.id).maybeSingle();
  if (error) throw error;
  return data as EptProfile | null;
}

export async function signOutStudent(): Promise<void> {
  const { error } = await requireSupabase().auth.signOut();
  if (error) throw error;
}

/** Requires a server-side RPC enforcing ownership, expiry and atomic use limits. */
export async function redeemStudentAccessCode(code: string): Promise<void> {
  const normalized = code.trim().replace(/\s+/g, '').toUpperCase();
  if (!normalized) throw new Error('اكتب كود التفعيل أولاً.');
  const { error } = await requireSupabase().rpc('redeem_student_access_code', { p_code: normalized });
  if (error) throw error;
}
