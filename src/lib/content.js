import { supabase } from './supabase';
export async function getContent(kind, slug) {
  if (!supabase) throw new Error('Supabase environment variables are required');
  let query = supabase.from('portfolio_content').select('id, slug, data').eq('kind', kind).order('position');
  if (slug) query = query.eq('slug', slug);
  const { data, error } = await query;
  if (error) throw error;
  return data.map(row => ({ ...row.data, id: row.id, slug: row.slug }));
}
