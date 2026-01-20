class LoginPage {
     username = "input[name='username']";
     password = "input[name='password']";
     submitButton = "button[type='submit']";
     errorMessage = ".oxd-alert-content-text";

     enterUsername(username) {
         cy.get(this.username).type(username);
     }
     enterPassword(password) {
         cy.get(this.password).type(password);
     }
     clickLogin() {
         cy.get(this.submitButton).click();
     }
     Login(username, password) {
         this.enterUsername(username);
         this.enterPassword(password);
         this.clickLogin();
     }
}

export default LoginPage;