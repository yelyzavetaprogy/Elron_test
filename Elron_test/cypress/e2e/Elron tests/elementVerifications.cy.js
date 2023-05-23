describe('Element Verifications', () => {
  before(() => {
    cy.visit('https://elron.ee/');
    cy.contains('Accept All').click(); // Consent to cookies
  });

  it('should verify the presence of important elements on the homepage', () => {
    cy.get('.logo').should('be.visible');
    cy.get('.search-input').should('be.visible');
    cy.get('.login-button').should('be.visible');
    cy.get('.navigation-menu').should('be.visible');
  });

  it('should verify the presence of user-related elements after logging in', () => {
    cy.get('.login-button').click();
    cy.get('#username').type('your_username');
    cy.get('#password').type('your_password');
    cy.get('.login-submit').click();
    cy.get('.user-profile').should('be.visible');
    cy.get('.logout-button').should('be.visible');
  });
});
