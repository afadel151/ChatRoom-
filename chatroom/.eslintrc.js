module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // Disable the need for a Babel config file
    ecmaVersion: 2020, // Use modern ECMAScript syntax
    sourceType: 'module', // Enable ES module imports
  },
  extends: [
    'plugin:vue/vue3-essential', // Or 'plugin:vue/vue3-recommended'
    'eslint:recommended',
  ],
  rules: {
    // Add or customize your rules here
  },
};
