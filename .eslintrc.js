module.exports = {
  'extends': ['eslint:recommended', 'google'],
  'env': {
    browser: true,
    es6: true,
  },
  'globals': {
    Polymer: true,
    AM: true,
  },
  'plugins': [
    'html',
  ],
  'rules': {
    // 2 == error, 1 == warning, 0 == off
    'arrow-parens': [2, 'always'],
    'indent': [2, 2, {
      SwitchCase: 1,
      VariableDeclarator: 2,
    }],
    'prefer-const': 2,
    'max-len': [2, {
      'code': 120,
    }],
    'no-unused-expressions': [2, {
      allowShortCircuit: true,
      allowTernary: false,
    }],
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'after-used',
    }],
  },
};
