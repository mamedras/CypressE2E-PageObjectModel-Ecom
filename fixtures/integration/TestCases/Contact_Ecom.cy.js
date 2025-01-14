import LoginTest from '..//PageObjectModel//Login.js'
import Contact from '..//PageObjectModel//Contact.js'
import HomePage from '..//Setup//HomePage.js'
describe("HomePage", function () {
    const Home_Page = new HomePage();
    const login = new LoginTest();
    const Contact_add = new Contact();
    it("Visit the website and login with the acc that we created", () => {
        Home_Page.Website()
        login.Login_Btn().click()
        login.username().type("404games", { force: true }).should("have.value", "404games")
        login.password_user().type("WhatsUphom", { force: true }).should("have.value", "WhatsUphom")
        login.Click_log().click()
    })
    it("Submitting the empty contact form ", () => {
        Home_Page.Website()
        Contact_add.Contact_Btn()
            .should("be.visible", { timeout: 10000 })
            .find("li")
            .contains("a", "Contact")
            .click({ force: true })
        Contact_add.Contact_submit().contains("button", "Send message").click({ force: true })
        cy.on("uncaught:exception", () => {

            return false
        })
        cy.on("window:alert", (Alert) => {
            expect(Alert).to.contains("Thanks for the message!!")
        })
    })
    it("Submitting the form without email and contact name", () => {
        Home_Page.Website()
        Contact_add.Contact_Btn()
            .should("be.visible", { timeout: 10000 })
            .find("li")
            .contains("a", "Contact")
            .click({ force: true })
        Contact_add.Contact_message(`Subject: Return Request for Order #123456
            Hello [Customer Service Team/Support Team],
            
            I would like to return the following item from my recent purchase:
                Item: [HpLenovo/model 2015]
                Order Number: #123456
                Reason for Return: "Getting hot quickly and shut down"
            
            Please let me know the next steps for processing this return. Thank you for your assistance!
            
            Best regards,
            Amedras Marwan`);
        Contact_add.Contact_submit().contains("button", "Send message").click({ force: true })
        cy.on("window:alert", (Alert1) => {
            expect(Alert1).to.contains("Thanks for the message!!")
        })
    })
    it("Submitting the form with the email and name contact ", () => {
        Home_Page.Website()
        Contact_add.Contact_Btn()
            .should("be.visible", { timeout: 10000 })
            .find("li")
            .contains("a", "Contact")
            .click({ force: true })
        Contact_add.Contact_Form("marwanamdras@gmail.com", "Marwan Amedras")
        Contact_add.Contact_submit().contains("button", "Send message").click({ force: true })
        cy.on("window:alert", (Alert2) => {
            expect(Alert2).to.contains("Thanks for the message!!")
        })
    })
    it("Submitting the form with the email and contact name and message", () => {
        Home_Page.Website()
        Contact_add.Contact_Btn()
            .should("be.visible", { timeout: 10000 })
            .find("li")
            .contains("a", "Contact")
            .click({ force: true })
        Contact_add.Contact_Form("marwanamdras@gmail.com", "Marwan Amedras")
        Contact_add.Contact_message(`Subject: Return Request for Order #123456
            Hello [Customer Service Team/Support Team],
            
            I would like to return the following item from my recent purchase:
                Item: [HpLenovo/model 2015]
                Order Number: #123456
                Reason for Return: "Getting hot quickly and shut down"
            
            Please let me know the next steps for processing this return. Thank you for your assistance!
            
            Best regards,
            Amedras Marwan`);
        Contact_add.Contact_submit().contains("button", "Send message").click({ force: true })
        cy.on("window:alert", (Alert3) => {
            expect(Alert3).to.contains("Thanks for the message!!")
        })

    })
})