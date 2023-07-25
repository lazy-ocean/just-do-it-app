context("openning", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("login modal is openning on main btn click", () => {
    cy.get("[data-cy=btn-login]").first().click();
    cy.get("[data-cy=modal-login]").should("exist");
  });

  it("login modal is openning on header btn click", () => {
    cy.get("[data-cy=btn-login]").eq(1).click();
    cy.get("[data-cy=modal-login]").should("exist");
  });

  it("reg modal is openning on main btn click", () => {
    cy.get("[data-cy=btn-reg]").first().click();
    cy.get("[data-cy=modal-register]").should("exist");
  });

  it("reg modal is openning on header btn click", () => {
    cy.get("[data-cy=btn-reg]").eq(1).click();
    cy.get("[data-cy=modal-register]").should("exist");
  });
});

context("closing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=btn-reg]").eq(1).click();
  });

  it("modal is closing", () => {
    cy.get("[data-cy=btn-task]").click();
    cy.get("[data-cy=modal-register]").should("not.exist");
  });

  it("modal is closing on outside click", () => {
    cy.get("[data-cy=btn-task]").click(-40, -40, { force: true });
    cy.get("[data-cy=modal-register]").should("not.exist");
  });
});
