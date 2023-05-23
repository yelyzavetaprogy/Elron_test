describe('Login/Logout Functionality', () => {
  beforeEach(() => {
    cy.visit('https://elron.ee/');
  });

  it('should log in successfully with valid credentials', () => {
    cy.get('.login-button').click();
    cy.get('#username').type('your_username');
    cy.get('#password').type('your_password');
    cy.get('.login-submit').click();
    cy.get('.user-profile').should('contain', 'Logged in as');
  });

  it('should display an error message for invalid login credentials', () => {
    cy.get('.login-button').click();
    cy.get('#username').type('invalid_username');
    cy.get('#password').type('invalid_password');
    cy.get('.login-submit').click();
    cy.get('.login-error-message').should('be.visible');
  });

  it('should log out successfully', () => {
    // Assuming the user is already logged in
    cy.get('.logout-button').click();
    cy.get('.login-button').should('be.visible');
  });
});
