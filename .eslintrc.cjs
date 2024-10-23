module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
    plugins: [],
    rules: {
        'vue/multi-word-component-names': 'off',
        'no-useless-escape': 'off',
        'import/order': 'off',
        'vue/no-v-html': 'off',
        'vue/valid-template-root': 'off',
        'vue/no-multiple-template-root': 'off'
    }
}
