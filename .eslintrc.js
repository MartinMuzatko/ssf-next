module.exports = {
	extends: ['@mantine/eslint-config'],
	parserOptions: {
		project: './tsconfig.json',
	},

	rules: {
		'react/react-in-jsx-scope': 'off',
		'no-tabs': 'off',
		'semi': 'off',
		'max-len': 'off',
		'indent': [
			'error',
			'tab'
		],
		'import/no-anonymous-default-export': 'off',
		'react-hooks/rules-of-hooks': 'off',
		'@next/next/no-img-element': 'off',
		'@next/next/link-passhref': 'off',
		'react/no-unescaped-entities': 'off',
		'react/jsx-indent-props': ['error', 'tab'],
		'@typescript-eslint/semi': ['error', 'never'],
		'react/jsx-closing-tag-location': 'off',
	},
}
