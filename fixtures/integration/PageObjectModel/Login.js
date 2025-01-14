class Login {
    VerifyTitle() {
        return cy.title().should('eq', 'STORE')
    }
    VerifyTitle1() {
        return cy.get("a").contains("a", "PRODUCT STORE")
    }
    Login_Btn() {
        return cy.get("#login2")
    }
    Signup() {
        return cy.get("#signin2")
    }
    username() {
        return cy.get("#loginusername")
    }
    password_user() {
        return cy.get("#loginpassword")
    }
    Email() {
        return cy.get("#sign-username")
    }
    Password() {
        return cy.get("#sign-password")
    }
    Submit_theAcc() {
        return cy.get("button[onclick='register()']")
    }
    Click_log() {
        return cy.get("button[onclick='logIn()']")
    }
}
export default Login