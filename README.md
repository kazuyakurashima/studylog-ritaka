# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

StudyLog Ritaka

A prototype study log app created for Ritaka, a 6th-grade student.

This MVP version focuses on personalized learning reflection and daily study tracking. It serves as the initial version of the broader StudyLog / StudySpark project, aimed at supporting self-directed learning in children.

※日本語説明

小学生「りたかくん」向けに作成した、学習ログアプリの最初バージョン(MVP)です。

自分の学習を振り返る機能

日々の学習経過を簡単に記録する機能

を主に実装しており、以後はその結果をもとに、他の学年や生徒への展開も検討中です。

Stack

TypeScript

HTML / CSS

LocalStorage (MVP phase)

This repository is a learning prototype and may evolve as the StudySpark brand expands.

※ご意見やフィードバック大歓迎です。

Let's make self-directed learning joyful and trackable!

# StudyLog Ritaka

A prototype study log app created for Ritaka, a 6th-grade student.

This MVP version focuses on personalized learning reflection and daily study tracking. It serves as the initial version of the broader StudyLog / StudySpark project, aimed at supporting self-directed learning in children.

## ※日本語説明

小学生「りたかくん」向けに作成した、学習ログアプリの最初バージョン(MVP)です。

- 自分の学習を振り返る機能
- 日々の学習経過を簡単に記録する機能

を主に実装しており、以後はその結果をもとに、他の学年や生徒への展開も検討中です。

## Stack

- TypeScript
- HTML / CSS
- LocalStorage (MVP phase)

---

This repository is a learning prototype and may evolve as the StudySpark brand expands.

---

※ご意見やフィードバック大歓迎です。

Let's make self-directed learning joyful and trackable!
