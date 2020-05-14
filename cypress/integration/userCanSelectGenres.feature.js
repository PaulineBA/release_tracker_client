describe("Visitor can select genres", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("visitor can unselect and select comedy", () => {
    cy.get("#comedy").should("be.visible");
    cy.get("#comedy").click();
    cy.get("#comedy").should("not.have.class", "active");
    cy.get("#comedy").click();
    cy.get("#comedy").should("have.class", "active");
  });

  it("visitor can unselect and select drama", () => {
    cy.get("#drama").should("be.visible");
    cy.get("#drama").click();
    cy.get("#drama").should("not.have.class", "active");
    cy.get("#drama").click();
    cy.get("#drama").should("have.class", "active");
  });

  it("visitor can unselect and select thriller", () => {
    cy.get("#thriller").should("be.visible");
    cy.get("#thriller").click();
    cy.get("#thriller").should("not.have.class", "active");
    cy.get("#thriller").click();
    cy.get("#thriller").should("have.class", "active");
  });
});
