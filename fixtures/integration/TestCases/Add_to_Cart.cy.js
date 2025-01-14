import LoginTest from '..//PageObjectModel//Login'
import HomePage from '..//Setup//HomePage'
import Assert from '..//PageObjectModel//Assert'
import AddToCart from '..//PageObjectModel//AddToCart';
describe("Add the product cart", function () {
    const Home_Page = new HomePage();
    const login = new LoginTest();
    const Asserting = new Assert();
    const AddCart = new AddToCart();
    it("Visit the website and login with the acc that we created", () => {
        Home_Page.Website()
        login.Login_Btn().click()
        login.username().type("404games", { force: true }).should("have.value", "404games")
        login.password_user().type("WhatsUphom", { force: true }).should("have.value", "WhatsUphom")
        login.Click_log().click()
        Asserting.Assert_Account_name().should("have.attr", "href", "#")
    })
    it("Assert the product content", () => {
        Home_Page.Website()
        Asserting.Assert_Product_Title().should("have.attr", "href", "prod.html?idp_=1")
        Asserting.Assert_Product_Title().should("contain.text", "Samsung galaxy s6")
        Asserting.Assert_Product_Image().should("have.attr", "src", "imgs/galaxy_s6.jpg")
    })
    it("Add the products to the WaitList and submit a from", () => {
        Home_Page.Website()
        AddCart.Product1().contains("Samsung galaxy s6").click()
        AddCart.AddToCart_Btn().click({ timeout: 4000 })
        cy.on("window:alert", (t) => {
            expect(t).to.contains("Product added")
        })
        AddCart.HomePlace().click()
        AddCart.Product2().contains("Sony xperia z5").click()
        AddCart.AddToCart_Btn().click({ timeout: 4000 })
    })
    it("submit a form with an empty creeds", () => {
        cy.visit("https://demoblaze.com/cart.html")
        AddCart.Place_Order_Btn().click()
        AddCart.Submit_Form().scrollTo('bottom', { ensureScrollable: false }).click()
        cy.on("window:alert", (alert1) => {
            expect(alert1).to.contains("Please fill out Name and Creditcard.")
        })
    })
    it("submit a form with name but without credit card", () => {
        cy.visit("https://demoblaze.com/cart.html")
        AddCart.Place_Order_Btn().click()
        cy.get("#name").type("Hassan")
        cy.get("#country").type("Algerian", { force: true })
        cy.get("#city").type("LJelfa")
        cy.get("#month").type("May")
        cy.get("#year").scrollTo("bottom", { ensureScrollable: false }).type("2015")
        AddCart.Submit_Form().scrollTo('bottom', { ensureScrollable: false }).click()
        cy.on("window:alert", (alert2) => {
            expect(alert2).to.contains("Please fill out Name and Creditcard.")
        })
    })
    it("submit a form without name", () => {
        cy.visit("https://demoblaze.com/cart.html")
        AddCart.Place_Order_Btn().click()
        cy.get("#country").type("Algerian", { force: true })
        cy.get("#city").type("LJelfa")
        cy.get("#card").type("6011000990139424")
        cy.get("#month").type("May")
        cy.get("#year").scrollTo("bottom", { ensureScrollable: false }).type("2015")
        AddCart.Submit_Form().scrollTo('bottom', { ensureScrollable: false }).click()
        cy.on("window:alert", (alert3) => {
            expect(alert3).to.contains("Please fill out Name and Creditcard.")
        })
    })
    it("submit a from But with an alphabets chars nums in the Credit card field ", () => {
        cy.visit("https://demoblaze.com/cart.html")
        AddCart.Place_Order_Btn().click()
        AddCart.Place_Order_Form("marwan", "Morocco", "Khouribga", "6ASDSQ1233WSDDEA", "May", "2024")
        AddCart.Submit_Form().should('be.visible').scrollTo('right', { ensureScrollable: false }).click()
        cy.on("window:alert", (alert4) => {
            expect(alert4).to.contains("Thank you for your purchase!")
        })
    })
    it("submit a from with correct creeds", () => {
        cy.visit("https://demoblaze.com/cart.html")
        AddCart.Place_Order_Btn().click()
        AddCart.Place_Order_Form("marwan", "Morocco", "Khouribga", "6011000990139424", "May", "2024")
        AddCart.Submit_Form().should('be.visible').scrollTo('right', { ensureScrollable: false }).click()
        cy.on("window:confirm", (alert5) => {
            expect(alert5).to.contains("Thank you for your purchase!")
        })
        cy.get(".confirm.btn.btn-lg.btn-primary").click()
    })


})