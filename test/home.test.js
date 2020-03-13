const assert = require('assert')
const homePage = require("../pages/home.page")

describe('The Internet Home Page', () => {
    it('Should have the right title', () => {
        browser.url('https://the-internet.herokuapp.com/')
        const title = browser.getTitle()
        assert.strictEqual(title, 'The Internet')
        homePage.getLiText()
    })
    it('Should have right page header - h1', () => {
        let headingText = $(".heading").getText()
        console.log(headingText)
    })
    it('Should have right sub header - h2', () => {
        let h2Text = $("h2").getText()
        console.log(h2Text)
        
    })
    it('Should have footer', () => {
        let footerText = $("#page-footer").getText()
        console.log(footerText)

        let footerXpath = $("//*[@id='page-footer']").getText()
        console.log(footerXpath)
    })
    it('Is footer displayed', () => {
        console.log(homePage.pageFooter.isDisplayed())
    })
    it('Should have github fork ribbon', () => {

    })
})