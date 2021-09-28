module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        '@nuxtjs/eslint-config-typescript/no-explicit-any': ['off'],
        '@typescript-eslint/no-unused-vars': ['off'],
        'require-await': ['off'],
        indent: [2, 4],
        quotes: [2, 'single'],
        semi: [2, 'never'],
        'no-use-before-define': [2, 'nofunc'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        'key-spacing': [1, {
            beforeColon: false,
            afterColon: true
        }],
        'import/first': [0],
        'object-property-newline': [2, {
            allowAllPropertiesOnSameLine: false
        }],
        'object-curly-newline': [1, {
            ObjectExpression: 'always',
            ImportDeclaration: 'always',
            ExportDeclaration: 'never'
        }],
        'vue/html-indent': [1, 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/html-closing-bracket-newline': [2, {
            singleline: 'never',
            multiline: 'always'
        }],
        'vue/html-closing-bracket-spacing': [2, {
            selfClosingTag: 'always'
        }]
    }
}
