module.exports = {
  env: {    
    "browser": true,
    "amd": true,
    "node": true
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'array-bracket-newline': [
      'warn',
      'always'
    ],
    'array-bracket-spacing': 'warn',
    'array-element-newline': 'warn',
    'object-curly-newline': [
      'warn',
      'always'
    ],
    'object-curly-spacing': 'warn',
    'object-property-newline': 'warn',
    'indent': [
      'warn',
      2
    ],
    'no-mixed-spaces-and-tabs': 'warn',
    'jsx-quotes': [
      "error",
      "prefer-double"
    ]
  }
};