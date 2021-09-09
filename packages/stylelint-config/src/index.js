module.exports = {
    plugins: ['stylelint-prettier'],
    extends: [
        'stylelint-config-standard',
        'stylelint-prettier/recommended',
        './base.js',
        './plugins/order.js'
    ],
    rules: {
        "prettier/prettier": true,
        'at-rule-no-unknown': [
            true, {
                ignoreAtRules: ['include', 'import', 'mixin']
            }
        ],
        'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['ng-deep'] }],
    }
};
