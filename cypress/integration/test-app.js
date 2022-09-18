describe("Initial Layout", () => {
  it("Has a body  a font-size of 14px", () => {
    cy.get("body").should("have.css", "font-size", "14px");
  });
























  it("Has a body with two children: header and main", () => {
    cy.get("body").within(() => {
      cy.get("header").should("exist");
      cy.get("main").should("exist");
    });
  });


















  it("Has a header with an h1", () => {
    cy.get("header").should("exist");
    cy.get("header").within(() => {
      cy.get("h1").should("exist").should("have.text", "Pokedex App");
      cy.get("div")
        .should("exist")
        .invoke("attr", "id")
        .should("eq", "pokemon-list");
    });
  });

























  it("Has a main element, with 3 section elements inside", () => {
    cy.get("main").within(() => {
      cy.get("section").should("have.length", 3);
    });
  });

























  it("Has a section element with a form", () => {
    cy.get("section h2").contains("Pokemon Log Form");
    cy.get("section form")
      .should("exist")
      .within(() => {
        cy.get("label")
          .should("exist")
          .invoke("attr", "for")
          .should("eq", "pallet");
        cy.get("input[type='radio']")
          .should("exist")
          .invoke("attr", "id")
          .should("eq", "pallet");
        cy.get("input[type='submit']")
          .should("exist")
          .invoke("attr", "value")
          .should("eq", "Submit to Log");
      });
  });

























  it("Has a section element with a ul for pokemon sightings", () => {
    cy.get("section h2").contains("Pokemon Log");
    cy.get("section ul").should("exist").invoke("attr", "id")
    .should("eq", "sightings-list");
  });

});