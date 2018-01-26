module.exports = {
  'env': {
    'mocha': true,
  },
  'plugins': [
    'chai-expect',
  ],
  'globals': {
    'expect': false,
    'fixture': false,
    'flush': false,
    'replace': false,
    'sinon': false,
    'WCT': false,
  },
  rules: {
    'no-unused-expressions': 0,
  },
};
