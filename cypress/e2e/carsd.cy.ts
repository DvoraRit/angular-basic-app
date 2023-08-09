describe("cards spec", () => {
    beforeEach(() => {
      cy.visit("http://localhost:4200/cards");
      cy.get('[data-testid="email-input"]').type("admin@gmail.com");

      cy.get('[data-testid="password-input"]').type("Zigit2022!");
  
      cy.get('[data-testid="submit-button"]').click();
      cy.get('a[href="/cards"]').click()
    });

    it("Should display all elements", () => {
        cy.get('[id="card"]').should("have.length.greaterThan", 1);
        cy.get('[id="add-card"]').should("have.length", 1);
    });

    it("Should open add card modal", () => {
        cy.get('[id="add-card"]').click();
        cy.get('[id="add-card-modal"]').should("have.length", 1);
    });
    it("Should close add card modal", () => {
        cy.get('[id="add-card"]').click();
        cy.get('[id="add-card-modal"]').should("have.length", 1);
        cy.get('img[alt="close"]').click();
        cy.get('[id="add-card-modal"]').should("not.be.visible");
    });

    


});