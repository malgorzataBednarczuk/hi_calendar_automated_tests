import {
    adminName,
    adminPassword,   
  } from '../support/login.js';

Cypress.Commands.add('login', (user, pass) => {
    cy.title().should('include', 'Hawaii Public Meetings & Events Calendar');
    cy.contains("Admin Login").click();
    cy.get('#username').type(user);
    cy.get('#password').type(pass);
    cy.get('#login-button').click();
    cy.get('#navbarDropdown').contains(adminName);
})

Cypress.Commands.add('loginAsAdmin', () => {
    cy.login(adminName, adminPassword)
})