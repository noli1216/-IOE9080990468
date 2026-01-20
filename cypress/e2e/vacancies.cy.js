import LoginPage from "../pages/LoginPage";

import VacancyPage from "../pages/VacancyPage";

// Create instances of Page Objects
const loginPage = new LoginPage();
const vacancyPage = new VacancyPage();

describe("Vacancy Module", () => {
  //  before() runs once before all tests in this suite
  before(() => {
    cy.log("Vacancies Test Suite Started"); // Log start of suite
  });

  // beforeEach() runs before each test
  beforeEach(() => {
    
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Perform login using POM
    loginPage.Login("Admin", "admin123");

    
    cy.contains("Recruitment").click();
    cy.contains("Vacancies").click();

    // Wait for the vacancies table to load
    cy.get(".oxd-table-body", { timeout: 10000 }).should("exist");
  });

  // afterEach() runs after each test
  afterEach(function () {
    // Take a screenshot if the test fails
    if (this.currentTest.state === "failed") cy.screenshot();
  });

  // Test Case: Add a new vacancy
  it("should add a new vacancy", () => {
    vacancyPage.addVacancy("Senior QA Engineer"); // Use POM method to add vacancy

    // Assert validation message for demo site (Required field message)
    cy.get("span.oxd-input-field-error-message")
      .should("be.visible")
      .and("contain.text", "Required");
  });

  // Test Case: Vacancy Name mandatory field validation
  it("Vacancy name mandatory field validation", () => {
    // Click Add without entering data
    cy.contains("Add").click();
    cy.get("button[type='submit']").click();

    // Assert required field validation is visible
    cy.contains("Required", { timeout: 10000 }).should("be.visible");
  });
});
