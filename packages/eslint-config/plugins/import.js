// Modules import rules
// https://github.com/benmosher/eslint-plugin-import
module.exports = {
    plugins: ['import'],
    settings: {
        'import/resolver': {
            typescript: {} // this loads <rootdir>/tsconfig.json to eslint
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        }
    },
    extends: ['plugin:import/recommended', 'plugin:import/typescript'],
    // https://github.com/benmosher/eslint-plugin-import#rules
    rules: {
        // #region Static analysis
        // Ensure imports point to a file/module that can be resolved.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': 'error',

        // Ensure named imports correspond to a named export in the remote file.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
        'import/named': 'error',

        // Ensure a default export is present, given a default import.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
        'import/default': 'error',

        // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        'import/namespace': 'error',

        // Restrict which files can be imported in a given folder
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
        // 'import/no-restricted-paths': 'off',

        // Forbid import of modules using absolute paths
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
        // 'import/no-absolute-path': 'off',

        // Forbid require() calls with expressions
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        // 'import/no-dynamic-require': 'off',

        // Prevent importing the submodules of other modules
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
        // 'import/no-internal-modules': 'off',

        // Forbid webpack loader syntax in imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
        'import/no-webpack-loader-syntax': 'warn',

        // Forbid a module from importing itself
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
        'import/no-self-import': 'error',

        // Forbid a module from importing a module with a dependency path back to itself
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
        // 'import/no-cycle': 'error',

        // Prevent unnecessary path segments in import and require statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
        'import/no-useless-path-segments': 'warn',

        // Forbid importing modules from parent directories
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
        // 'import/no-relative-parent-imports': 'off',

        // Forbid modules without any export, and exports not imported by any modules.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
        // FIXME: This is disabled because it shows weird errors
        // 'import/no-unused-modules': [
        //   'warn',
        //   { unusedExports: true, missingExports: false },
        // ],

        // Prevent importing packages through relative paths.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md
        // 'import/no-relative-packages': 'off',
        // #endregion Static analysis

        // #region Helpful warnings
        // Report any invalid exports, i.e. re-export of the same name
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        'import/export': 'error',

        // Report use of exported name as identifier of default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
        // 'import/no-named-as-default': 'off',

        // Report use of exported name as property of default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
        // 'import/no-named-as-default-member': 'warn',

        // Report imported names marked with @deprecated documentation tag
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
        'import/no-deprecated': 'warn',

        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // 'import/no-extraneous-dependencies': 'error',

        // Forbid the use of mutable exports with var or let.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
        'import/no-mutable-exports': 'warn',
        // #endregion Helpful warnings

        // #region Module systems
        // Report potentially ambiguous parse goal (script vs. module)
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
        // 'import/unambiguous': 'off',

        // Report CommonJS require calls and module.exports or exports.*
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        // 'import/no-commonjs': 'off',

        // Report CommonJS require calls and module.exports or exports.*.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        // 'import/no-commonjs': 'off',

        // Report AMD require and define calls.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        'import/no-amd': 'error',

        // No Node.js builtin modules.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        // 'import/no-nodejs-modules': 'off',

        // Forbid imports with CommonJS exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md
        // 'import/no-import-module-exports': 'off',
        // #endregion Module systems

        // #region Style guide
        // Ensure all imports appear before other statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
        'import/first': 'error',

        // Ensure all exports appear after other statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
        // 'import/exports-last': 'off',

        // Report repeated import of the same module in multiple places [autofix]
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'import/no-duplicates': 'warn',

        // Forbid namespace (a.k.a. 'wildcard' *) imports [autofix]
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
        // 'import/no-namespace': 'off',

        // Ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        // 'import/extensions': 'off',

        // Enforce a convention in module import order [autofix]
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        'import/order': [
            'warn',
            {
                // pathGroups: [{ pattern: '*/**', group: 'internal', position: 'before' }],
                groups: ['external', 'internal', 'builtin', 'parent', 'index', 'sibling'],
                pathGroupsExcludedImportTypes: [],
                pathGroups: [
                    {
                        pattern: '~*',
                        group: 'external'
                    },
                    {
                        pattern: '~**/**',
                        group: 'external'
                    }
                ],
                'newlines-between': 'always',
                alphabetize: { order: 'asc', caseInsensitive: true }
            }
        ],

        // Enforce a newline after import statements [autofix]
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
        'import/newline-after-import': ['warn', { count: 1 }],

        // Prefer a default export if module exports a single name
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        // 'import/prefer-default-export': 'off',

        // Limit the maximum number of dependencies a module can have
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
        // 'import/max-dependencies': 'off',

        // Forbid unassigned imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
        // 'import/no-unassigned-import': 'off',

        // Forbid named default exports (no-named-default)
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
        // 'import/no-named-default': 'off',

        // Forbid default exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
        // 'import/no-default-export': 'off',

        // Forbid named exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
        // 'import/no-named-export': 'off',

        // Forbid anonymous values as default exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
        'import/no-anonymous-default-export': 'warn',

        // Prefer named exports to be grouped together in a single export declaration
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
        // 'import/group-exports': 'off',

        // Enforce a leading comment with the webpackChunkName for dynamic imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
        // 'import/dynamic-import-chunkname': 'off'
        // #endregion Style guide

        // import _ from 'foo' вместо import 'foo'
        'import/no-unassigned-import': 'error',
        'import/no-extraneous-dependencies': 'off',
        'import/no-internal-modules': 'off'
    },

    overrides: [
        {
            files: ['*.md', '**/*.md/**'],
            rules: {
                'import/no-unresolved': 'off'
            }
        },
        {
            files: ['*.d.ts'],
            rules: {
                'import/no-unused-modules': 'off'
            }
        }
    ]
};
