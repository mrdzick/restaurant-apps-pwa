module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        'space-before-function-paren': ['error', 'never'],
        indent: ['error', 4]
    }
}
