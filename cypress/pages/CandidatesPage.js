class CandidatePage {
  constructor() {
    this.firstNameInput = 'input[name="firstName"]';
    this.lastNameInput = 'input[name="lastName"]';
    this.emailInput = 4;
    this.searchInput = 'input[placeholder="Search"]'; // search selector
    this.searchButton = 'button:contains("Search")'; 
  }

  addCandidate(firstName, lastName, email) {
    cy.contains("Add").click();
    cy.get(".oxd-form", { timeout: 10000 }).should("be.visible");

    if (firstName) {
      cy.get(this.firstNameInput).should("be.visible").type(firstName);
    } else {
      cy.get(this.firstNameInput).focus().blur();
    }

    if (lastName) {
      cy.get(this.lastNameInput).should("be.visible").type(lastName);
    } else {
      cy.get(this.lastNameInput).focus().blur();
    }

    if (email) {
      cy.get(".oxd-input").eq(this.emailInput).should("be.visible").type(email);
    } else {
      cy.get(".oxd-input").eq(this.emailInput).focus().blur();
    }

    cy.contains("button", "Save").click();
  }

  searchCandidate(searchTerm) {
    cy.get(this.searchInput).should("be.visible").clear().type(searchTerm);
    cy.get(this.searchButton).click();
    // Optional: Wait for results
    cy.get(".oxd-table-row").should("contain.text", searchTerm);
  }

  searchCandidateFromFixture(fixtureName) {
    cy.fixture(fixtureName).then((data) => {
      if (data.searchTerm) {
        this.searchCandidate(data.searchTerm);
      } else {
        throw new Error("searchTerm not found in fixture");
      }
    });
  }
}

export default CandidatePage;
