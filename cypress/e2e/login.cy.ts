describe("Login spec", () => {
    beforeEach(() => {
      cy.visit("http://localhost:4200/");
    });

    it("Should display all elements", () => {
        // email input
        cy.get('[data-testid="email-input"]').should("have.length", 1);
    
        // password input
        cy.get('[data-testid="password-input"]').should("have.length", 1);
    
        // submit button
        cy.get('[data-testid="submit-button"]').should("have.length", 1);
      });

      it("Should display error message email input are not valid", () => {
   
        cy.get('[data-testid="email-input"]').type("wornfemail.gmail.com");
    
        cy.get('[data-testid="password-input"]').type("123456");
        cy.get('[data-testid="submit-button"]').click();
    
        cy.get('[data-testid="input-error"]').should("have.length", 1);
      });

        it("Should display error message password input are not valid", () => {
            cy.get('[data-testid="email-input"]').type("wornfemail@gmail.com");
            cy.get('[data-testid="password-input"]').click();
            cy.get('[data-testid="submit-button"]').click();
            cy.get('[data-testid="input-error"]').should("have.length", 1);
        });

        it("Should display error message for wrong credentials", () => {
            cy.get('[data-testid="email-input"]').type("admin@gmail.com");
            cy.get('[data-testid="password-input"]').type("mtjBdpt4!");
            cy.get('[data-testid="submit-button"]').click();
            cy.get('[data-testid="loginError"]').should("have.length", 1);
          });

          
  it("Should move to home page after successful login", () => {
    cy.get('[data-testid="email-input"]').type("admin@gmail.com");

    cy.get('[data-testid="password-input"]').type("Zigit2022!");

    cy.get('[data-testid="submit-button"]').click();

    cy.intercept('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqvGhmvEmvsuwNf0EkSQA5YgymYWFsCFE', {
      statusCode: 200
    }).as('loginRequest');
    
    cy.location("pathname").should("not.include", "login");
  });

   it("Should logout after login", ()=>{
    cy.get('[data-testid="email-input"]').type("admin@gmail.com");
    cy.get('[data-testid="password-input"]').type("Zigit2022!");
    cy.get('[data-testid="submit-button"]').click();
    cy.intercept('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqvGhmvEmvsuwNf0EkSQA5YgymYWFsCFE', {
      statusCode: 200
    }).as('loginRequest');
    cy.location("pathname").should("not.include", "login");
    cy.get('[data-testid="logout"]').click();
    cy.location("pathname").should("include", "login");
   })


});