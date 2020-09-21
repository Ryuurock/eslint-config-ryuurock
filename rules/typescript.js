module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    // 允许 @ts-ignore
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
    '@typescript-eslint/ban-ts-ignore': 'off',

    // 不允许未使用的变量，部分情况除外
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // 不允许无用的 constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    '@typescript-eslint/no-useless-constructor': 'error',

    // 不允许定义前使用，function 除外
    // disallow use of variables before they are defined
    'no-use-before-define': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],

    // 不允许无用的表达式
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],

    // 允许不使用 prop-types，仅 ts
    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',

    // 允许重复的类成员，仅 ts
    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'off',
  },
};
