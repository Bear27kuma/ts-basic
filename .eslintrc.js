module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    // TypeScriptでチェックされる項目をLintから除外する設定
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // prettierのextendsは他のextendsより後に記述する
    "prettier",
    // 現在は不要になっているのでコメントアウト
    // "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "sourceType": "module",
    // TypeScriptのLint時に参照するconfigファイルを指定
    "project": "./tsconfig.json"
  },
  // 上位ディレクトリにある他のeslintrcを参照しないようにする
  root: true,
  // チェックして欲しくない項目などを記述する
  rules: {}
}
