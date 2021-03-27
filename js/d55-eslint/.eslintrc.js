/* eslint-disable prettier/prettier */
module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    // "prettier/react",
  ], //定义文件继承的子规范
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': 'error',
    semi: 'off',
  },
};
