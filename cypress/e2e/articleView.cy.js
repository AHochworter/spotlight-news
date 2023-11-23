describe('should intercept GET request, load main page and allow user to select an artilce', () => {
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

  it('should load the selected article and display the article elements', () => {
    cy.get('.card').first().click();
    cy.url(
      'http://localhost:3000/article/George%20Santos%20announces%20he%20won%E2%80%99t%20seek%20reelection%20following%20damning%20Ethics%20Committee%20report%20-%20CNN'
    );
    cy.get('.selected-article-container').should('have.length', 1);
    cy.get('.selected-card-img').should('exist');
    cy.get('.selected-article-title').should(
      'have.text',
      'George Santos announces he won’t seek reelection following damning Ethics Committee report - CNN'
    );
    cy.get('.description').should(
      'contain',
      'The House Ethics Committee released its'
    );
    cy.get('.published-at').should(
      'have.text',
      'Article Published: November 16, 2023'
    );
    cy.get('.link-to-full-article')
      .should('have.attr', 'href')
      .and(
        'eq',
        'https://www.cnn.com/2023/11/16/politics/ethics-committee-releases-santos-report/index.html'
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
    cy.get('.home-link').click();
    cy.url('eq', 'http://localhost:3000');
  });
});
