module.exports = {
    plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],

    rules: {
        'order/properties-order': [[], { severity: 'warning' }],
        'plugin/rational-order': [
            true,
            {
                'border-in-box-model': false,
                'empty-line-between-groups': false
            }
        ]
    }
};
