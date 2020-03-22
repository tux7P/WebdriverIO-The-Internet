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
    it('Check if Header exists', () => {
        console.log(homePage.PageHeader.isExisting())
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
    it('Check if footer is displayed', () => {
        console.log(homePage.pageFooter.isDisplayed())
    })
    it('Check if footer is displayed in viewport', () => {
        console.log(homePage.pageFooter.isDisplayedInViewport())
    })
    it('Should click element', () => {
        homePage.clickOnLink()
        expect(homePage.getSpecificElementText(1)).equals('A/B Testing')
    })
    it('Should click checkbox', () => {
        browser.navigateTo('https://the-internet.herokuapp.com/')
        homePage.clickCheckbox(1)
        expect(homePage.checkbox(1).isSelected()).equals(true)
    })
    it('Should switch to iframe', () => {
        browser.url(`${browser.options.baseUrl}/iframe`)
        homePage.h3Header.waitForDisplayed()
    })

})