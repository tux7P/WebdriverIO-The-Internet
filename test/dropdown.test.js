const homePage = require("../pages/home.page")

describe('Dropdown Tests', function () {
    it('should select option 1', () => {
        browser.url(`${browser.options.baseUrl}/dropdown`)
        homePage.clickDropdownMenu()
        homePage.clickDropdownMenuOption1()
    })
    it('should select option 2', () => {
        homePage.clickDropdownMenu()
        homePage.clickDropdownMenuOption2()
    })
})