import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import jsonc from 'eslint-plugin-jsonc'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    ignores: ['dist/', 'lib/', 'node_modules/', 'coverage/', 'badges/']
  },
  js.configs.recommended,
  ...tsPlugin.configs['flat/recommended'],
  ...jsonc.configs['flat/recommended-with-json'],
  prettierRecommended
]
