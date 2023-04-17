describe("End to End Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Login Testing", () => {
    cy.get("#login-btn").click();

    cy.get("#user-email").type("admin@gmail.com");
    cy.get("#user-pass").type("admin@1234");

    cy.get("#user-submit").click();
  });

  it("Player Testing", () => {
    cy.get("#top-card-1").click();

    cy.get("#user-email").type("admin@gmail.com");
    cy.get("#user-pass").type("admin@1234");

    cy.get("#user-submit").click();
    cy.get("#top-card-1").click();
  });
});
