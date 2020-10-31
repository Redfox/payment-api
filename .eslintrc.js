module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
    'no-useless-constructor': 'off',
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      "files": ["**/*.test.ts"],
      "rules": {
        '@typescript-eslint/no-explicit-any': 'off',
      }
    }
  ]
};
