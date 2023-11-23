describe('should intercept GET and load main page', () => {
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

  it('should load main article cards and elements', () => {
    cy.get('h1').should('contain', 'SPOTLIGHT NEWS');
    cy.get('.search-form').should('exist');
    cy.get('.article-cards').should('have.length', 1);
    cy.get('.card').first().should('contain', 'CNN');
    cy.get('.card')
      .first()
      .find('.title')
      .should(
        'contain',
        'George Santos announces he won’t seek reelection following damning Ethics Committee report - CNN'
      );
    cy.get('.card').last().should('contain', 'ESPN');
    cy.get('.card')
      .last()
      .find('.title')
      .should(
        'contain',
        "Michigan's Jim Harbaugh accepts Big Ten's 3-game suspension - ESPN"
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
});
