const rules = require('./rules')

module.exports = {
  root: true,
  
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  
  env: {
    node: true,
    browser: true,
    es6: true,
    serviceworker: true,
    phantomjs: false,
    amd: false,
  },
  
  globals: {
    require: true,
    Promise: true,
    process: true,
    Vue: true,
    VueRouter: true,
    createVuexLogger: true,
    Store: true,
  },
  
  plugins: ['vue'],
  
  rules: rules,
  
  extends: ['plugin:vue/recommended'],
}
