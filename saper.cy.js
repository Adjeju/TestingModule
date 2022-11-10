describe("Saper", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1920, 1080);
  });

  it("should win the game", () => {
    cy.contains("Start").click();
    cy.get(".cell").as("list");
    cy.get("@list").eq(0).click();
    cy.get("@list").eq(2).click();
    cy.get("@list").eq(3).click();
    cy.get("@list").eq(5).click();
    cy.contains("You win!").should("exist");
  });

  it("should restart the game", () => {
    cy.contains("Start").click();
    cy.get(".cell").as("list");
    cy.get("@list").eq(0).click();
    cy.get("@list").eq(2).click();
    cy.get("@list").eq(3).click();
    cy.get("@list").eq(5).click();
    cy.contains("You win!").should("exist");
    cy.contains("Restart").click();
  });

  it("should loose the game", () => {
    cy.contains("Start").click();
    cy.get(".cell").as("list");
    cy.get("@list").eq(1).click();
    cy.contains("Opps, you loose").should("exist");
  });
});
