// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  const creds = {
    email: 'test@mail.com',
    password: 'password'
  };

  const { body, boundary } = generateForm(creds);

  cy.request({
    method: 'POST',
    url: 'https://t-notes.herokuapp.com/restApi/users.json/login/',
    headers: {
      accept: "application/json",
      "Content-Type": `multipart/form-data; boundary=${boundary}`
    },
    body: body
  }).then(response => {
    window.localStorage.setItem('token', response.body.token);
  });
});