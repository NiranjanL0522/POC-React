describe('example login to app', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/dasboard')
    cy.get('.App-header #login').should('have.length', 1)
    cy.get('.App-header #logout').should('have.length', 0)
    cy.get('.App-header #login').click()
    cy.get('.form-field div input').first().type('niranjan')
    cy.get('.form-field div input').last().type('niranjan')
    cy.get('.login-buttons').first().click()
  });

  it('details with graph', () => {
    cy.get('.react-grid-layout div[data-grid]').should('have.length', 4);
    cy.get('.react-grid-layout div[data-grid] button').should('have.length', 1);
    cy.get('.react-grid-layout div[data-grid] button').click()
    // cy.get('.react-grid-layout div[data-grid]').should('have.length', 4);
  });
});