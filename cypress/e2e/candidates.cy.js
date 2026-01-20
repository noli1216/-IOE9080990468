import LoginPage from "../pages/LoginPage";
import CandidatePage from "../pages/CandidatesPage";

// Create instances of the pages
const loginPage = new LoginPage();
const candidatePage = new CandidatePage();

describe("Candidates Module", () => {
  //  before() runs *once before all tests* in this suite
  before(() => {
    cy.log("Candidates Test Suite Started"); // Log start of suite
  });

  //  beforeEach() runs **before each test**
  beforeEach(() => {
    // Visit the login page
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );


    loginPage.Login("Admin", "admin123");

    // Navigate to Recruitment 
    cy.contains("Recruitment").click();
    cy.contains("Candidates").click();

    // Ensure the candidates table is visible
    cy.get(".oxd-table-body", { timeout: 10000 }).should("exist");
  });

  // afterEach() runs after each test
  afterEach(function () {
    // Take screenshot if test fails
    if (this.currentTest.state === "failed") cy.screenshot();
  });

  //Test case: Add a new candidate
  it("should add a new candidate", () => {
    cy.fixture("candidatedata").then((data) => {
      // Use Candidate Page Object to add candidate
      candidatePage.addCandidate(
        data.valid.firstName,
        data.valid.lastName,
        data.valid.email
      );

      // Assert success toast appears
      cy.get(".oxd-toast-container", { timeout: 10000 })
        .should("be.visible")
        .contains("Successfully Saved");
    });
  });

  // Test case: Mandatory fields validation
  it("Mandatory fields validation", () => {
    cy.fixture("candidatedata").then((data) => {
      // Try adding a candidate without first name
      candidatePage.addCandidate(
        data.invalid.missingFirstName.firstName,
        data.invalid.missingFirstName.lastName,
        data.invalid.missingFirstName.email
      );

      // Check that "Required" error appears
      cy.contains("Required", { timeout: 10000 }).should("be.visible");
    });
  });

  // Test case: Search candidates
  it("Search Vacancies", () => {
    cy.fixture("vacancyData").then((data) => {
      const { jobTitle, hiringManager, status } = data.invalid.search;

      // Select Job Title from dropdown
      cy.get(".oxd-select-text").eq(0).click();
      cy.get(".oxd-select-dropdown")
        .should("be.visible")
        .within(() => {
          cy.get(".oxd-select-option").first().click(); // Select first option
        });

      // Enter Hiring Manager in autocomplete
      cy.get(".oxd-autocomplete-text-input input").clear().type(hiringManager);
      cy.get(".oxd-autocomplete-dropdown")
        .should("be.visible")
        .within(() => {
          cy.get(".oxd-autocomplete-option").first().click(); // Select first option
        });

      // Open Status dropdown
      cy.get(".oxd-select-text").eq(1).click();
      cy.get(".oxd-select-dropdown")
        .should("be.visible")
        .find(".oxd-select-option")
        .first()
        .click(); // Select first option
    });
  });
});
