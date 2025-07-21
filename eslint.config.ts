import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
	js.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,

	{
		files: ['**/*.ts', '**/*.tsx'],

		plugins: {
			import: importPlugin,
			prettier: prettierPlugin,
		},

		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: true,
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},

		rules: {
			'@typescript-eslint/consistent-type-assertions': 'warn',
			'prettier/prettier': 'warn',
			'no-var': 'warn',
			'prefer-const': 'warn',
			'prefer-template': 'warn',
			'prefer-spread': 'warn',
			'no-else-return': 'warn',
			'no-alert': 'warn',
			'prefer-arrow-callback': 'warn',
			curly: 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'no-empty': ['warn', { allowEmptyCatch: true }],
			'no-constant-condition': 'warn',
			'one-var': ['warn', 'never'],
			'sort-imports': ['warn', { ignoreDeclarationSort: true }],
			'import/order': [
				'warn',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
						'object',
						'type',
					],
					'newlines-between': 'always',
				},
			],
			'no-undef': 'off',
			eqeqeq: 'warn',
			'@typescript-eslint/no-unsafe-assignment': 'warn',
			'@typescript-eslint/no-unused-expressions': 'warn',
		},
	},
]
