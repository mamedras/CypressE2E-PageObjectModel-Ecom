import LoginTest from '..//PageObjectModel//Login'
import HomePage from '..//Setup//HomePage'
import Assert from '..//PageObjectModel//Assert'

describe("Login Test", function () {
    const Home_Page = new HomePage();
    const login = new LoginTest();
    const Asserting = new Assert();
    it("Visit the website", () => {
        Home_Page.Website()
    })
    it("Asserting the website title`s tab", () => {
        Home_Page.Website()
        Asserting.Assert_Title().should("eq", "STORE")
    })
    it("Asserting the website title`s", () => {
        Home_Page.Website()
        Asserting.Assert_Title2().contains("a", "PRODUCT STORE")
    })
    it("Asserting the Website image", () => {
        Home_Page.Website()
        Asserting.Assert_Image().should("have.attr", "src", "Samsung1.jpg")
    })
    it("Login with Invalid creeds", () => {
        Home_Page.Website()
        login.Login_Btn().click()
        login.username().type("404ga", { force: true }).should("have.value", "404ga")
        login.password_user().type("WGHSSDscdf", { force: true }).should("have.value", "WGHSSDscdf")
        login.Click_log().click()
        cy.on("window:alert", ((t) => {
            expect(t).to.contains("User does not exist.")
        }))
    })
    it("Login with Valid creeds", () => {
        Home_Page.Website()
        login.Login_Btn().click()
        login.username().type("404games", { force: true }).should("have.value", "404games")
        login.password_user().type("WhatsUphom", { force: true }).should("have.value", "WhatsUphom")
        login.Click_log().click()
        Asserting.Assert_Account_name().contains("Welcome 404games")
        Asserting.Assert_Account_name().should("have.attr", "href", "#")
        cy.xpath("//*[@id='tbodyid']/div[1]/div/a/img").should("have.attr", "src", "imgs/galaxy_s6.jpg").scrollTo('left', { ensureScrollable: false })
    })
})
