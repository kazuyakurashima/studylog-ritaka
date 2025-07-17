import { createClient } from '@supabase/supabase-js';
export const supabase =createClient();
// supabaseと繋げるために、urlとapiをここに記入する。
// 直接ではなく、環境変数で渡す。