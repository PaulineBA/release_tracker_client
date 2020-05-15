  describe("User can track one person", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/search*",
        response: "fixture:search_response.json",
      });
      cy.visit("/");
      cy.get("input#search").type("Tom Hanks");
      cy.get("button").contains("Search").click();
    });

    describe("with all genders selected", () => {
      before(() => {
        cy.route({
          method: "GET",
          url: "http://localhost:3000/api/v1/search*",
          response: "fixture:genres_selection1_response.json",
        });
        cy.get("#track-1").click() 
      })
      it("User can see upcoming releases first result", () => {
        cy.get("#release-item-1").within(() => {
          cy.contains("Tom Hank's New Comedy Movie");
          cy.contains("Tracked people: Tom Hanks");
          cy.contains("Tracked genres: Comedy");
          cy.contains("2022")
        });
      });

      it("User can see upcoming releases second result", () => {
        cy.get("#release-item-2").within(() => {
          cy.contains("Tom Hank's New Thriller Movie");
          cy.contains("Tracked people: Tom Hanks");
          cy.contains("Tracked genres: Thriller");
          cy.contains("2021")
        });
      });
  
      it("User can go back to previous page", () => {
        cy.get("#btn-back").click();
        cy.get("#header").should("contain", "Release Tracker");
        cy.get("button").should("contain", "Search");
      });
    });
  }) 
  
  describe("User fas", () => {
    before(() => {
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/search*",
        response: "fixture:genres_selection1_response.json",
      });
      cy.get("#track-1").click() 
    })
    it("User can see upcoming releases first result", () => {
      cy.get("#release-item-1").within(() => {
        cy.contains("Tom Hank's New Comedy Movie");
        cy.contains("Tracked people: Tom Hanks");
        cy.contains("Tracked genres: Comedy");
        cy.contains("2022")
      });
    });

    it("User can see upcoming releases second result", () => {
      cy.get("#release-item-2").within(() => {
        cy.contains("Tom Hank's New Thriller Movie");
        cy.contains("Tracked people: Tom Hanks");
        cy.contains("Tracked genres: Thriller");
        cy.contains("2021")
      });
    });

    it("User can go back to previous page", () => {
      cy.get("#btn-back").click();
      cy.get("#header").should("contain", "Release Tracker");
      cy.get("button").should("contain", "Search");
    });
  });
 



