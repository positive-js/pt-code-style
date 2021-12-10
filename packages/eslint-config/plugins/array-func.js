// Rules for Array functions and methods.
// https://github.com/freaktechnik/eslint-plugin-array-func
module.exports = {
    plugins: ['array-func'],
    extends: ['plugin:array-func/recommended'],

    // https://github.com/freaktechnik/eslint-plugin-array-func/tree/main/rules
    rules: {
        'array-func/prefer-array-from': 'off'
    }
};
