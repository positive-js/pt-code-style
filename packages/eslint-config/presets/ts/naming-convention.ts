module.exports = [
    'error',
    {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
    },

    {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE']
    },
    {
        selector: 'function',
        format: [
            'strictCamelCase'
        ]
    },
    {
        selector: 'typeLike',
        format: ['StrictPascalCase']
    },
    {
        selector: 'interface', format: ['StrictPascalCase'], prefix: ['I']
    },
    {
        selector: 'enum',
        format: ['StrictPascalCase']
    },
    {
        selector: 'parameter',
        format: ['strictCamelCase'],
        leadingUnderscore: 'allow'
    },
    {
        selector: 'enumMember',
        format: [
            'UPPER_CASE',
            'PascalCase'
        ]
    },
    {
        selector: 'property',
        format: [
            'camelCase',
            'UPPER_CASE'
        ]
    },
    {
        selector: 'property',
        format: [
            'camelCase',
            'UPPER_CASE'
        ],
        modifiers: ['private'],
        leadingUnderscore: 'allow'
    },
    {
        selector: 'class',
        format: ['StrictPascalCase']
    },
    {
        selector: 'class',
        modifiers: ['abstract'],
        format: ['StrictPascalCase'],
        prefix: ['Abstract', 'Base']
    }
];
