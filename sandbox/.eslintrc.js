module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.ts', '.jsx', '.tsx'],
			},
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:prettier/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
		'react/jsx-props-no-spreading': 0,
		'import/extensions': 0,
		// 'prettier/prettier': 0,
	},
};
