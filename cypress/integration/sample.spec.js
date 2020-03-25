describe('First cypress test', () => {

  it('First one', () => {
    cy.visit('http://t-notes.herokuapp.com/#/');
    cy.get('#getStarted')
      .contains('Get Started')
      .click();

    cy.url().should('include', '/register');
  });

  it('Second one', () => {
    cy.visit('http://t-notes.herokuapp.com/#/register');
    cy.get('#form-firstName')
      .type('My First Name')
      .should('have.value', 'My First Name');
  });


});