describe('should load main page', () => {
  beforeEach(() => {
    const apiKey = Cypress.env('REACT_APP_NEWS_API_KEY');
    cy.log('Setting up API interception');
    cy.intercept(
      'GET',
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      {
        statusCode: 200,
        fixture: 'articleData',
      }
    )
      .as('getArticles')
      .log('Visiting the main page');
    cy.visit('http://localhost:3000');
    cy.wait('@getArticles').log('API call completed');
  });

  it('should load main article elements', () => {
    cy.get('h1').should('contain', 'SPOTLIGHT NEWS');
  });
});
