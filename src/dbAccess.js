
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.API_URL;
const supabaseKey = process.env.API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

export async function fetchData(table) {

    let { data: projects, error } = await supabase.from(table).select('*');

    return projects;
}