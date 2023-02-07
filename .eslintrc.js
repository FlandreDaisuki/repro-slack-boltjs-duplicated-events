module.exports = {
  root: true,
  env: {
    es6: true,
  },
  overrides: [{
    // https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/#Adding-a-rule
    files: ['**/*.ts'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      'arrow-parens': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'key-spacing': 'error',
      'comma-spacing': 'error',
      'arrow-spacing': 'error',
      'keyword-spacing': 'error',
      'object-curly-spacing': ['error', 'always'],
      'space-infix-ops': 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', 'always'],
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      'eol-last': ['error', 'always'],
      'no-console':
        process.env.NODE_ENV === 'production'
          ? ['error', { allow: ['warn', 'error'] }]
          : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      'no-use-before-define': ['warn', {
        functions: true,
        classes: true,
        variables: true,
      }],

      // RulesSet: @typescript-eslint
      indent: ['error', 2],
      // note: you must disable the base rule as it can report incorrect errors
      quotes: 'off',
      '@typescript-eslint/quotes': ['warn', 'single'],

      // note: you must disable the base rule as it can report incorrect errors
      semi: 'off',
      '@typescript-eslint/semi': ['error', 'always'],
      '@typescript-eslint/member-delimiter-style': ['warn'],
      '@typescript-eslint/consistent-type-imports': ['warn'],
      '@typescript-eslint/sort-type-union-intersection-members': ['warn'],

      '@typescript-eslint/type-annotation-spacing': ['warn']
    },
  }],
};
