import {
  dateToCode 
} from './../../plugins/currentDateWithoutSpecialCharacters';

context('Actions', () => {
  beforeEach(() => {
    cy.visit('')
  })
 
  it('Add a Calendar with Sunshine Law', () => {
    cy.loginAsAdmin();
    cy.contains('Manage Calendars').click();
    cy.contains('Add new calendar').click();
    cy.get('.select2-selection__placeholder').click();
    cy.get('.select2-results').type('Access Hawaiʻi Committee').click();
    cy.get('#code').type(dateToCode);
    cy.get("#renditions\\'en\\'\\.name").type('Test');   
    cy.get("#renditions\\'en\\'\\.description").type('It is calendar description');
    cy.get('#sunshineLaw').should('be.checked'); 
    cy.get('.btn-lg').click();
    cy.get('#code\\.query').type(dateToCode);
    cy.contains('Apply filter(s)').click();
    cy.get('.mb-4').contains(dateToCode);
  })  
})
