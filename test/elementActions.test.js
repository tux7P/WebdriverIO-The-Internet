const homePage = require('../pages/home.page')

describe ('Test element action', function() {
    it('should click element', () => {
        browser.url('/')
        homePage.clickOnLink()
        expect(browser.getUrl()).equals('https://the-internet.herokuapp.com/abtest')
    })
})