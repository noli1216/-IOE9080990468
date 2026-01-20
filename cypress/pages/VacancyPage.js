class VacancyPage {
  addVacancy(vacancyName) {
    cy.contains("Add").click();

    cy.get(".oxd-form", { timeout: 10000 }).should("be.visible");

    // Vacancy Name
    cy.get(".oxd-input").first().type(vacancyName);

    // Job Title
    cy.contains("Job Title")
      .closest(".oxd-input-group")
      .find(".oxd-select-text")
      .click({ force: true });

    cy.get(".oxd-select-dropdown", { timeout: 10000 })
      .find(".oxd-select-option")
      .first()
      .click({ force: true });

    // Save (overlay-safe)
    cy.contains("button", "Save").click({ force: true });
  }
}

export default VacancyPage;
