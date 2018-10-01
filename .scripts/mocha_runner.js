// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.
// Use `.scripts/user/pretest.js instead`.

require('@babel/register');
require('@babel/polyfill');
var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

// Add jsdom support, which is required for enzyme.
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = global.document.defaultView;

// For use with codemirror
global.document.body.createTextRange = function() {
  return {
      setEnd: function(){},
      setStart: function(){},
      getBoundingClientRect: function(){
          return {right: 0};
      },
      getClientRects: function(){
          return {
              length: 0,
              left: 0,
              right: 0
          }
      }
  }
}

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

process.on('unhandledRejection', function (error) {
  console.error('Unhandled Promise Rejection:');
  console.error(error && error.stack || error);
});

require('./user/pretest.js');
