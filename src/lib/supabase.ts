import { createClient } from '@supabase/supabase-js';

export const supabase =createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_API_KEY,
);
// supabaseと繋げるために、urlとapiをここに記入する。
// 直接ではなく、環境変数で渡す。
// createClientで初期化する