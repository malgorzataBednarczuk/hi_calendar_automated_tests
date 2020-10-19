context('Actions', () => {
  beforeEach(() => {
    cy.visit('')
  })
 
  it('Add Event on Calendar with Sunshine Law', () => {
    cy.loginAsAdmin();
    cy.get('.mb-4 > .btn').click();
    cy.get('#adaInfo-label').contains('Important Notice');
    cy.get('#adaInfo .btn').click();
    cy.get('.select2-selection__placeholder').click();
    cy.get('.select2-results').type('Access Hawaiʻi Committee').click();
    cy.get("#renditions\\'en\'\\.title").type('Meeting test day');
    cy.get("#renditions\\'en\\'\\.location").type('Hawaii location');
  //TODO
  })  
})
