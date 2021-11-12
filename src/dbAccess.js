
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_API_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

export async function fetchData(table) {

    let { data: projects, error } = await supabase.from(table).select('*');

    return projects;
}