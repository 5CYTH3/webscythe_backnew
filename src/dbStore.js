// import { createClient } from '@supabase/supabase-js'

console.log(process.env.API_URL);
console.log(process.env.API_KEY)

const supabaseUrl = process.env.API_URL;
const supabaseKey = process.env.API_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey)