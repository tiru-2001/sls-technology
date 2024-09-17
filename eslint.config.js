<<<<<<< HEAD
<<<<<<< HEAD
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist','src'] },
=======
=======
>>>>>>> 5048d99575d51e8820836c20f3b7e9aa66888ff3
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist', 'src'] },
<<<<<<< HEAD
>>>>>>> 5048d99575d51e8820836c20f3b7e9aa66888ff3
=======
>>>>>>> 5048d99575d51e8820836c20f3b7e9aa66888ff3
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
<<<<<<< HEAD
<<<<<<< HEAD
]
=======
];
>>>>>>> 5048d99575d51e8820836c20f3b7e9aa66888ff3
=======
];
>>>>>>> 5048d99575d51e8820836c20f3b7e9aa66888ff3
