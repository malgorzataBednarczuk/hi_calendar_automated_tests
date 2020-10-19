

context('Actions', () => {
  beforeEach(() => {
    cy.visit('')
  })
 
  it('.type() - type into a DOM element', () => {
    cy.loginAsAdmin();
    cy.contains('Manage Calendars').click();
    cy.contains('Add new calendar').click();
    cy.get('.select2-selection__placeholder').click();
    cy.get('.select2-results').type('Access Hawaiʻi Committee').click();
    cy.get('#code')
  //TODO
  })  
})
