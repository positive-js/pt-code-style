module.exports = {
    rules: {
        /**
         * https://eslint.org/docs/rules/no-constructor-return
         */
        'no-constructor-return': 'warn',

        /**
         * https://eslint.org/docs/rules/no-empty-function
         */
        'no-empty-function': [
            'warn',
            {
                allow: [
                    'constructors'
                ]
            }
        ],
        /**
         * https://eslint.org/docs/rules/max-lines-per-function#enforce-a-maximum-function-length-max-lines-per-function
         */
        'max-lines-per-function': [
            'warn',
            100
        ],

        /**
         * https://eslint.org/docs/rules/no-restricted-syntax
         */
        'no-restricted-syntax': [
            'error',
            'WithStatement',
            'BinaryExpression[operator=\'in\']'
        ],
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-void': 'error',
        'no-var': 'error',
        "no-eval": "error",
        "no-return-await": "error",
        "no-duplicate-imports": "error",
        "no-template-curly-in-string": "error",
        "no-console": "error",
        "object-shorthand": "error",
        "prefer-template": "error",
        "prefer-object-spread": "error", // Object.assign(...foo); вместо Object.assign({}, foo)
        "prefer-const": "error",
        "use-isnan": "error", // isNaN() rather then foo == NaN
        "yoda": "error", // Yoda conditions are so named because the literal value of the condition comes first while the variable comes second
        //запрещает foo = doSomething(), val;
        "no-sequences": "error",// более строгий аналог: no-restricted-syntax": ["error", "SequenceExpression"]

        // Запрещает var foo = "Copyright \251";, дополняет no-octal из eslint:recommended
        "no-octal-escape": "error",

        // String(someValue); вместо new String(someValue);
        "no-new-wrappers": "error",

        // Запрещает arguments.caller and arguments.callee
        "no-caller": "error",

        // var person = new Person();  вместо  var person = new Person;
        "new-parens": "error",

        //  var x = y || z; вместо var x = y | z;
        "no-bitwise": "error",

        // function foo(bar) {var baz = bar;} вместо function foo(bar) {bar = 13;}
        "no-param-reassign": "error",

        // Обязательное использование hasOwnProperty в for (key in foo) {}
        "guard-for-in": "error",

        // Необязательно, но должно улучшить читабельность код
        "one-var": [
            "error",
            "never" // запрещает var bar, baz;   const bar = true, baz = false;
        ],
        "arrow-body-style": [
            "warn",
            "as-needed" // let foo = () => 0; и let foo = () => { bar(); };
        ],

        "max-classes-per-file": "off",
        "no-invalid-this": "off",
        "no-multi-str": "off",
        "no-null/no-null": "off",
        "radix": "off",
        "valid-typeof": "off",
        "newline-before-return": "warn"
    }
};
