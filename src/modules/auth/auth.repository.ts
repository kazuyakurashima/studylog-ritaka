import { supabase } from "@/lib/supabase";

export const authRepository = {
  async signup(name: string, email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error != null || data.user == null) throw new Error(error?.message);
    return {
      ...data.user,
      userName: data.user.user_metadata.name,
    };
  },
  async signin(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error != null || data.user == null) throw new Error(error?.message);
    return {
      ...data.user,
      userName: data.user.user_metadata.name,
    };
  },
};




// 🍩イメージで理解しよっ！これは「ユーザー登録受付の受付嬢さん」🎤
// このコード全体は、まるでカフェの受付カウンターにいる「受付嬢のサラさん☕」みたいなものなの✨

// 👩‍💼サラさん（= authRepository.singnup関数）
// 1.「お名前、メール、パスワードをお願いします〜💕」って聞いてくる
// 2.入力されたら、Supabase（後ろの事務担当）に「あの子、登録お願い〜」って依頼！
// 3.うまくいったら、Supabaseが「この子ね！」ってユーザー情報を返してくれる
// 4.サラさんはそれをちょっとだけアレンジして、userNameを取り出して「はいっ！これが新規登録の子です〜✨」って返してくれる💌



// 🧰全体像：「authRepository」は何をするもの？
// 💼 **「認証関連の関数をまとめておく“ツールボックス”や“引き出し”みたいな存在」**だよ！

// たとえば、「会員制のカフェ☕」だとしたら…
// お店に入るには👉 ログインが必要
// お客さんを登録するには👉 サインアップが必要
// ログアウトしたり、パスワードリセットもあるかも？
// そんな「認証に関わるすべての操作」を一か所にぎゅっとまとめて整理したのが、authRepositoryちゃんなの💼💕

// 🧩具体的にはこう分けて使う！
// export const authRepository = {
//   async signup(...) { ... }, // 新規登録
//   async login(...) { ... },  // ログイン
//   async logout() { ... },    // ログアウト
//   async getCurrentUser() { ... }, // 今ログインしてる人を取得
// };


// signup: 会員登録
// login: ログイン
// logout: ログアウト
// getCurrentUser: 今のユーザー情報を取る

// などなど、関係する機能を全部authRepositoryというひとつの箱にしまうのが目的だよっ💘