// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

global.generateForm = obj => {
  const boundary = String(Math.random()).slice(2);
  const boundaryMiddle = '--' + boundary + '\r\n';
  const boundaryLast = '--' + boundary + '--\r\n';
  let body = ['\r\n']; 
  
  for (let key in obj) {
    body.push('Content-Disposition: form-data; name="' + key + '"\r\n\r\n' + obj[key] + '\r\n');
  }
  
  body = body.join(boundaryMiddle) + boundaryLast;

  return {
    body,
    boundary
  };
};