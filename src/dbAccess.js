
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = import.meta.env.VITE_API_URL;
export const supabaseKey = import.meta.env.VITE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function fetchData(table) {

    let { data: projects, error } = await supabase.from(table).select('*');

    return projects;
}