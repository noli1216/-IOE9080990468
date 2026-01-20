
import LoginPage from "../pages/LoginPage";
// Import Excel reader utility for data-driven testing
import { readExcel } from "../support/excelReader";

// Create an instance of the Login Page
const loginPage = new LoginPage();

describe("Login Tests", () => {
  // before() runs once before all tests in this suite
  before(() => {
    cy.log("Test Suite Started"); // Log start of suite
  });

  // beforeEach() runs before each test
  beforeEach(() => {
    
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  // afterEach() runs after each test
  afterEach(function () {
    // Take a screenshot if the current test failed
    if (this.currentTest.state === "failed") {
      cy.screenshot();
    }
  });

  //  Test Case: Valid login using JSON fixture
  it("valid login", () => {
    cy.fixture("loginData").then((users) => {
      loginPage.Login(users.valid.username, users.valid.password); // Perform login
      cy.url().should("include", "/dashboard"); // Assert redirection to dashboard
    });
  });

  //  Test Case: Invalid login using JSON fixture
  it("invalid login", () => {
    cy.fixture("loginData").then((users) => {
      // Loop through all invalid credentials
      cy.wrap(users.invalid).each((user) => {
        loginPage.Login(user.username, user.password); // Attempt login
        cy.get(loginPage.errorMessage) // Check error message
          .should("be.visible")
          .and("contain", "Invalid credentials");
      });
    });
  });

  //  Test Case: Empty credentials validation
  it("empty credentials", () => {
    loginPage.clickLogin(); // Click login without entering anything
    cy.contains("Required").should("be.visible"); // Assert validation message
  });

  //  Test Case: Login using Excel Data-Driven Testing (DDT)
  it("Login with Excel DDT", () => {
    // Read data from Excel sheet
    readExcel("cypress/fixtures/loginData.xlsx", "Sheet1").then((rows) => {
      rows.forEach((row) => {
        loginPage.Login(row.username, row.password); // Attempt login

        // Validate based on type of credentials
        if (row.type === "valid") {
          cy.url().should("include", "/dashboard"); // Valid login → dashboard
        } else {
          cy.contains("Invalid").should("be.visible"); // Invalid login → error
        }
      });
    });
  });
});
