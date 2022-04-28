describe("Basic tests", () => {
    it("should load page", () => {
        cy.visit("/");
    });

    it("should multiply two numbers correctly", () => {
        cy.visit("/");
        cy.get("button").contains("9").click();
        cy.get("button").contains("x").click();
        cy.get("button").contains("3").click();
        cy.get("button").contains("=").click();
        cy.get(".component-display").should("have.text", "28");
    });
});