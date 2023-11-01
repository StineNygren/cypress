describe("login", () => {
  it("can log in", () => {
    cy.visit("index.html");
    cy.get("input#email").type("stine@mail.no");
    cy.get("input#password").type("passord{enter}");
    cy.get("h1").contains("Profile");
  });
});
