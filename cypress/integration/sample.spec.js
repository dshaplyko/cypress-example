describe('First cypress test', () => {

  beforeEach(() => {
    cy.login();
  });

  it('First one', () => {
    cy.visit('/');
    cy.get('#getStarted')
      .contains('Get Started')
      .click();

    cy.url().should('include', '/register');
  });

  it('Second one', () => {
    cy.visit('/register');
    cy.get('#form-firstName')
      .type('My First Name')
      .should('have.value', 'My First Name');
  });

  after(() => {
    cy.logout();
  });


});