describe("Comfy", () => {
  beforeEach(() => {
    cy.visit("https://hotline.ua/");
    cy.viewport(1920, 1080);
  });

  it("should redirect to 'Apple iPhone 13 Pro 128GB Sierra Blue (MLVD3)'", () => {
    cy.contains("Відгуки про товари").click();
    cy.url().should("include", "/reviews/");
  });

  it("should find 'Apple iPhone 13 Pro 128GB Sierra Blue (MLVD3)'", () => {
    cy.get('input[placeholder="Знайти товар, магазин, бренд"]').type(
      "Apple iPhone 13 Pro 128GB Sierra Blue (MLVD3){enter}"
    );
    cy.contains("Apple iPhone 13 Pro 128GB Sierra Blue (MLVD3)").click();

    cy.contains("Apple iPhone 13 Pro 128GB Sierra Blue (MLVD3)").should(
      "exist"
    );
  });

  it("should fetch data from GRAPHQL api", () => {
    cy.request({
      method: "POST",
      url: "https://hotline.ua/svc/frontend-api/graphql",
      body: {
        operationName: "visitedProductGuest",
        query: `
          query visitedProductGuest($guestId: String!) {
            visitedProduct(guestId: $guestId) {
              products
              __typename
            }
          }
        `,
        variables: {
          guestId: "a7cde3fecfe766bf8c30da9d879b422d",
        },
      },
    })
      .its("body.data.visitedProduct.products")
      .should("have.length", 1);
  });
});
