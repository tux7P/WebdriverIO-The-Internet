class Home {
    get PageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2')}
    get h3Header() { return $('h3') }
    get pageFooter() { return $('#page-footer')}
    get parent() { return $('ul')}
    get child() { return this.parent.$$('li')}
    specificChild(index) { return this.parent.$('li:nth-child(${index})')}
    getSpecificElementText(index) {
        return this.specificChildElement(index).getText()
    }
    
    get firstLink() { return $('ul li:nth-child(1) a')}

    get iframeBody() { return $('#tinymce')}
    get iframe() { return $('#mceu_27 #mce_0_ifr')}
    checkbox(index) { return $('#checkboxes input:nth-child(${index})')}
    
    get dropdownMenu() { return $('#dropdown') }
    get dropdownMenuOption1() { return $('#dropdown option:nth-child(2)') }
    get dropdownMenuOption2() { return $('#dropdown option:nth-child(3)') }

    getLiText() {
        this.child.filter((element) => {
            console.log(element.getText())
        } )
    }

    clickOnLink() {
        if(this.firstLink.isDisplayed() === true) {
            this.firstLink.click()
        }
        this.h3Header.waitForDisplayed()
    }

    clickCheckbox(index) {
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
    }

    clickDropdownMenu() {
        this.dropdownMenu.waitForDisplayed()
        this.dropdownMenu.click()
    }

    clickDropdownMenuOption1() {
        this.dropdownMenuOption1.waitForDisplayed()
        this.dropdownMenuOption1.click()
    }

    clickDropdownMenuOption2() {
        this.dropdownMenuOption2.waitForDisplayed()
        this.dropdownMenuOption2.click()
    }

    
}

module.exports = new Home()