import {createClient} from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const {data, error} = await supabase.from('restaurants').select('*');
console.log('🚀 ~ allRestaurants:', data);
