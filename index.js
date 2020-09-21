module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    require.resolve('./rules/base'),
    require.resolve('./rules/import'),
    require.resolve('./rules/react'),
    require.resolve('./rules/react-a11y'),
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['prettier', 'prettier/@typescript-eslint', require.resolve('./rules/typescript')],
    },
  ],
};
