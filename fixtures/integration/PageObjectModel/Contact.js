class Contact {
    Contact_Btn() {
        return cy.get("ul")
    }
    Contact_Form(email, name) {
        cy.get("#recipient-email").type(email, { force: true })
        cy.get("#recipient-name").type(name, { force: true })
    }
    Contact_message(message) {
        return cy.xpath("//*[@id=\"message-text\"]").type(message, { force: true })
    }
    Contact_submit() {
        return cy.get("button[onclick='send()']")
    }
}
export default Contact