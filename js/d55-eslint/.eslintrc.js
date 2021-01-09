/** @format */

module.exports = {
    parser: '@typescript-eslint/parser', //定义ESLint的解析器
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'eslint-config-prettier',
    ], //定义文件继承的子规范
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        browser: true,
        es6: true,
    },
    rules: {
        'prettier/prettier': 1,
        // "semi": ["error", "never"], // 禁止使用分号s
    },
}
