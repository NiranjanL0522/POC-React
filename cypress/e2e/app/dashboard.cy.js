describe('example login to app', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/dasboard')
    cy.get('.App-header #login').should('have.length', 1);
    cy.get('.App-header #logout').should('have.length', 0);
    cy.get('.App-header #login').click();
    cy.get('.form-field div input').first().type('niranjan');
    cy.get('.form-field div input').last().type('niranjan');
    cy.get('.login-buttons').first().click();
  });

  it('details with graph', () => {
    cy.get('.react-grid-layout div[data-grid]').should('have.length', 4);
    cy.get('#addGraph').should('have.length', 1);
    cy.get('#addGraph').click();
    cy.get('.react-grid-layout div[data-grid]').should('have.length', 5);
  });

  it('details with table', () => {
    cy.get('.MuiTable-stickyHeader').should('have.length', 1);
    cy.get('.MuiTable-stickyHeader thead tr').should('have.length', 1);
    cy.get('.MuiTable-stickyHeader tbody tr').should('have.length', 6);
    cy.get('#addEmployee').should('have.length', 1);
    cy.get('#addEmployee').click();
    cy.get('.form-field div input').first().type('abcd');
    cy.get('.form-field div input').last().type(10000);
    cy.get('.form-field div input').first().should('have.value', 'abcd');
    cy.get('.form-field div input').last().should('have.value', '010000');
    cy.get('#cancelEmployee').click();
    cy.get('.MuiTable-stickyHeader tbody tr').should('have.length', 6);
    cy.get('#addEmployee').click();
    cy.get('.form-field div input').first().type('abcd');
    cy.get('.form-field div input').last().type(10000);
    cy.get('.form-field div input').first().should('have.value', 'abcd');
    cy.get('.form-field div input').last().should('have.value', '010000');
    cy.get('#createEmployee').click();
    cy.get('.MuiTable-stickyHeader tbody tr').should('have.length', 7);
  });
});