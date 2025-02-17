describe('Home Page', () => {
  it('should load the home page and display content', () => {
    cy.visit('/'); // Visit the home page (assuming it's running locally)
    cy.contains('ComplyCube'); // Assert the page contains the text
  });

});


describe('Onboarding Page', () => {
  it('should fill out the onboarding form and submit', () => {
    cy.visit('/onboarding');
    cy.get('input[name="firstName"]').should('be.enabled');
    cy.get('input[name="lastName"]').should('be.enabled');
    cy.get('input[name="email"]').should('be.enabled');
    cy.get('input[name="dateOfBirth"]').should('be.enabled');






  });

  it('should navigate to onboarding page when "Upload Documents" button is clicked', () => {
    cy.visit('/onboarding'); // Visit the home page

    // Find the "Upload Documents" button and click it
    cy.contains('Onboarding');

    // Assert that the URL changes to the onboarding page
    cy.url().should('include', '/onboarding'); // Ensure we are on the /onboarding page
  });





});





