module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'tailwind.config.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      "./tsconfig.json",
    ],
  },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-absolute-path': 'off',
    '@typescript-eslint/no-shadow': 'off',
  },
}
