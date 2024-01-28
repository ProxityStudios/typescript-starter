module.exports = {
	extends: [
		'eslint:recommended',
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/typescript',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
		'plugin:unicorn/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	plugins: ['@typescript-eslint', 'eslint-comments', 'promise', 'unicorn'],
	env: {
		node: true,
	},
	root: true,
	rules: {
		// Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
		'no-prototype-builtins': 'off',
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-unsafe-member-access': 'warn',
		// Use function hoisting to improve code readability
		'no-use-before-define': [
			'error',
			{ functions: false, classes: true, variables: true },
		],
		// Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ functions: false, classes: true, variables: true, typedefs: true },
		],
		// Common abbreviations are known and readable
		'unicorn/prevent-abbreviations': 'off',
		// Airbnb prefers forEach
		'unicorn/no-array-for-each': 'off',
		// It's not accurate in the monorepo style
		'import/no-extraneous-dependencies': 'off',
	},
	overrides: [
		{
			files: ['*.js'],
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
			rules: {
				'unicorn/prefer-module': 'off',
			},
		},
	],
};
