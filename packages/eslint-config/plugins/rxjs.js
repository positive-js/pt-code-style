module.exports = {
    plugins: [
        'eslint-plugin-rxjs'
    ],
    extends: [
        'plugin:rxjs/recommended'
    ],
    rules: {
        'rxjs/no-implicit-any-catch': 'warn'
    }
}
