describe('should get an error message for a failed network request', () => {
  it('should give the user an error message for a failure to fetch todays headlines', () => {
    const apiKey = Cypress.env('REACT_APP_NEWS_API_KEY');
    cy.intercept(
      'GET',
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      {
        statusCode: 401,
        body: '',
      }
    ).as('getArticles');
    cy.visit('http://localhost:3000');
    cy.wait('@getArticles');
    cy.get('.error-h2').contains('ERROR');
    cy.get('.error-container > :nth-child(2)').should(
      'contain',
      'Error fetching articles.'
    );
    cy.get('.error-container > :nth-child(3)').should(
      'contain',
      "Apologies, we're having trouble loading the page. Please try again later."
    );
    cy.get('.footer').should('contain', 'Spotlight News');
    cy.get('.linkedin-block')
      .find('a')
      .invoke('attr', 'href')
      .should('eq', 'https://www.linkedin.com/in/annhochworter/');
    cy.get('.github-block')
      .find('a')
      .invoke('attr', 'href')
      .should('eq', 'https://github.com/AHochworter');
  });
  it('should give the user an error message for a server error', () => {
    const apiKey = Cypress.env('REACT_APP_NEWS_API_KEY');
    cy.intercept(
      'GET',
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      {
        statusCode: 500,
        body: '',
      }
    ).as('getArticles');
    cy.visit('http://localhost:3000');
    cy.wait('@getArticles');
    cy.get('.error-h2').contains('ERROR');
    cy.get('.error-container > :nth-child(2)').should(
      'contain',
      'Error fetching articles.'
    );
    cy.get('.error-container > :nth-child(3)').should(
      'contain',
      "Apologies, we're having trouble loading the page. Please try again later."
    );
  });
});
