describe('Search Functionality', () => {
  before(() => {
    cy.visit('https://elron.ee/');
    cy.contains('Accept All').click(); // Consent to cookies
  });

  it('should display search results for a valid search term', () => {
    cy.get('.search-input').type('Tallinn');
    cy.get('.search-button').click();
    cy.get('.search-results').should('be.visible');
  });

  it('should display no search results for an invalid search term', () => {
    cy.get('.search-input').type('InvalidTerm');
    cy.get('.search-button').click();
    cy.get('.no-results-message').should('be.visible');
  });
});
