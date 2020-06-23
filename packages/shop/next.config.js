const withTM = require('next-transpile-modules')(['@amplify/ui-components']); // pass the modules you would like to see transpiled

module.exports = withTM();
