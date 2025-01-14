class Assert {
    Assert_Title() {
        return cy.title()
    }
    Assert_Title2() {
        return cy.get("a", { timeout: 4000 })
    }
    Assert_Image() {
        return cy.get("img[alt='First slide']", { timeout: 40000 })
    }
    Assert_Account_name() {
        return cy.get("#nameofuser")
    }
    Assert_Product_Image() {
        return cy.xpath('//*[@id="tbodyid"]/div[1]/div/a/img', { timeout: 40000 })
    }
    Assert_Product_Title() {
        return cy.get("a[href='prod.html?idp_=1']", { timeout: 40000 })
    }
}
export default Assert