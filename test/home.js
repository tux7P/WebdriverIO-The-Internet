const assert = require('assert')

describe('The Internet Home Page', () => {
    it('Should have the right title', () => {
        browser.url('https://the-internet.herokuapp.com/')
        const title = browser.getTitle()
        assert.strictEqual(title, 'The Internet')

        let headingText = $(".heading").getText()
        console.log(headingText)

        let footerText = $("#page-footer").getText()
        console.log(footerText)

        let footerXpath = $("//*[@id='page-footer']").getText()
        console.log(footerXpath)
    })
    it('Should have right page header - h1', () => {})
    it('Should have right sub header - h2', () => {})
    it('Should have footer', () => {})
    it('Should have github fork ribbon', () => {})
})