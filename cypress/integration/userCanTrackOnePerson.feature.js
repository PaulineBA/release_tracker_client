describe("User can track one person", () => {
  describe("User can track one person with all genres selected", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/search*",
        response: "fixture:genres_selection1_response.json",
      });
      cy.visit("/");
      cy.get("input#search").type("Tom Hanks");
      cy.get("button").contains("Search").click();
      cy.get("#track-1").click();
    });

    it("User can see upcoming releases first result", () => {
      cy.get("#release-item-1").within(() => {
        cy.contains("Tom Hank's New Comedy Movie");
        cy.contains("Tracked people: Tom Hanks");
        cy.contains("Tracked genres: Comedy");
      });
    });

    it("User can see upcoming releases second result", () => {
      cy.get("#release-item-1").within(() => {
        cy.contains("Tom Hank's New Thriller Movie");
        cy.contains("Tracked people: Tom Hanks");
        cy.contains("Tracked genres: Thriller");
      });
    });

    it("User can go back to previous page", () => {
      cy.get("#btn-back").click();
      cy.get("#header").should("contain", "Release Tracker");
      cy.get("button").should("contain", "Search");
    });
  });
  describe("User can track one person with two genres selected", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/search*",
        response: "fixture:genres_selection2_response.json",
      });
      cy.visit("/");
      cy.get("input#search").type("Tom Hanks");
      cy.get("#thriller").click();
      cy.get("button").contains("Search").click();
      cy.get("#track-1").click();
    });

    it("User can see upcoming releases first result", () => {
      cy.get("#release-item-1").within(() => {
        cy.contains("Tom Hank's New Comedy Movie");
        cy.contains("Tracked people: Tom Hanks");
        cy.contains("Tracked genres: Comedy");
      });
    });

    it("User can see upcoming releases second result", () => {
      cy.get("#release-item-1").within(() => {
        cy.contains("Tom Hank's New Drama Movie");
        cy.contains("Tracked people: Tom Hanks");
        cy.contains("Tracked genres: Drama");
      });
    });

    it("User can go back to previous page", () => {
      cy.get("#btn-back").click();
      cy.get("#header").should("contain", "Release Tracker");
      cy.get("button").should("contain", "Search");
    });
  });
});
