module.exports = {
  "env": {
    "shared-node-browser": true,
    "mocha": true
  },
  "plugins":[
    "mocha"
  ],
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion":2018,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ]
  }
};
