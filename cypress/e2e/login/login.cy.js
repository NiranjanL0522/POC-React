describe('example login to app', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/login')
  });

  it('displays login form', () => {
    cy.get('.form-field div input').should('have.length', 2)
    cy.get('.form-field div input').first().should('have.text', '')
    cy.get('.form-field input').last().should('have.text', '')
  });

  it('login with correct details', () => {
    const newInput = 'niranjan'
    cy.get('.form-field div input').first().type(`${newInput}{enter}`)
    cy.get('.form-field div input').last().type(`${newInput}{enter}`)
    cy.get('.form-field div input').first().should('have.value', 'niranjan')
    cy.get('.form-field div input').last().should('have.value', 'niranjan')
    cy.get('.login-buttons').first().click()
    cy.get('.react-grid-layout div[data-grid]').should('have.length', 3);
  });

  it('login with wrong details', () => {
    const newInput = 'abc'
    cy.get('.form-field div input').first().type(`${newInput}{enter}`)
    cy.get('.form-field div input').last().type(`${newInput}{enter}`)
    cy.get('.form-field div input').first().should('have.value', 'abc')
    cy.get('.form-field div input').last().should('have.value', 'abc')
    cy.get('.login-buttons').first().click()
    cy.get('.form-field div input').should('have.length', 2)
  });
  it('login with cancel action', () => {
    const newInput = 'abc'
    cy.get('.form-field div input').first().type(`${newInput}{enter}`)
    cy.get('.form-field div input').last().type(`${newInput}{enter}`)
    cy.get('.form-field div input').first().should('have.value', 'abc')
    cy.get('.form-field div input').last().should('have.value', 'abc')
    cy.get('.login-buttons').last().click()
    cy.get('.form-field div input').first().should('have.value', '')
    cy.get('.form-field div input').last().should('have.value', '')
  });
});