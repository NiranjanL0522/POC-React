describe('example login to app', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000')
  });

  it('navigation changes with login and logout', () => {
    cy.get('.App-header #login').should('have.length', 1)
    cy.get('.App-header #logout').should('have.length', 0)
    cy.get('.App-header #login').click()
    cy.get('.form-field div input').first().should('have.text', '')
    cy.get('.form-field input').last().should('have.text', '')
    cy.get('.form-field div input').first().type('niranjan')
    cy.get('.form-field div input').last().type('niranjan')
    cy.get('.form-field div input').first().should('have.value', 'niranjan')
    cy.get('.form-field div input').last().should('have.value', 'niranjan')
    cy.get('.login-buttons').first().click()
    cy.get('.App-header #login').should('have.length', 0)
    cy.get('.App-header #logout').should('have.length', 1)
    cy.get('.App-header #logout').click()
    cy.get('.App-header #login').should('have.length', 1)
    cy.get('.App-header #logout').should('have.length', 0)
  });
});