module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'prettier',
    'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'airbnb'
	],
  parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'simple-import-sort',
    '@typescript-eslint'
	],
	rules: {
    'arrow-parens': ['error', 'as-needed'],
    'import/extensions': ['error', 'never'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
		'simple-import-sort/imports': 'error',
    indent: ['error', 2],
    'react/jsx-indent': ['error', 2],
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
      ]
    }]
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts', '.tsx'],
				moduleDirectory: ['node_modules', 'src']
			}
		}
	}
};
