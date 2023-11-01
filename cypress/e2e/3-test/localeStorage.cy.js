describe("local storage", () => {
  it("can store and acsess value", () => {
    cy.visit("index.html");
    const myEmail = "stine@mail.no";
    cy.get("input#email").type("stine@mail.no");
    cy.get("input#password").type("passord{enter}");
    cy.get("h1").contains("Profile");
    //localStorage.setItem("name", "stine")
    cy.window()
      .its("localStorage")
      .invoke("getItem", "email")
      .should("eq", myEmail);
  });
});
