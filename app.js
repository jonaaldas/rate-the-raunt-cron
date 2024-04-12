import {CronJob} from 'cron';
import {createClient} from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

new CronJob(
	'0 0 */3 * *',
	async function() {
		const {data, error} = await supabase.from('restaurants').select('*');
		console.log('🚀 ~ allRestaurants:', data);
	},
	null,
	true,
	'America/Los_Angeles'
);
