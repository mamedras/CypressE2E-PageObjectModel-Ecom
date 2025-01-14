class AddToCart {
    Product1() {
        return cy.xpath("//*[@id=\"tbodyid\"]/div[1]/div/div/h4/a")
    }
    Product2() {
        return cy.xpath('//*[@id="tbodyid"]/div[6]/div/div/h4/a')
    }
    AddToCart_Btn() {
        return cy.get(".btn.btn-success.btn-lg")
    }
    Place_Order_Btn() {
        return cy.get(".btn.btn-success")
    }
    HomePlace() {
        return cy.get("li[class='nav-item active'] a[class='nav-link']")
    }
    Cart() {
        return cy.get("#cartur")
    }
    Place_Order_Form(Name, Country, City, Credit_card, Month, Year) {
        cy.get("#name").type(Name)
        cy.get("#country").type(Country, { force: true })
        cy.get("#city").type(City)
        cy.get("#card").type(Credit_card)
        cy.get("#month").type(Month)
        cy.get("#year").scrollTo("bottom", { ensureScrollable: false }).type(Year)
    }
    Submit_Form() {
        return cy.get("button[onclick='purchaseOrder()']")
    }
}
export default AddToCart