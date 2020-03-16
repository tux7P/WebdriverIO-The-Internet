class Home {
    get PageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2')}
    get pageFooter() { return $('#page-footer')}
    get parent() { return $('ul')}
    get child() { return this.parent.$$('li')}
    specificChild(index) { return this.parent.$('li:nth-child(${index})')}

    get firstLink() { return $('ul li:nth-child(1) a')}

    checkbox(index) { return $('#checkboxes input:nth-child(${index})')}
    getLiText() {
        this.child.filter((element) => {
            console.log(element.getText())
        } )
    }

    clickOnLink() {
        if(this.firstLink.isDisplayed() === true) {
            this.firstLink.click()
        }
        browser.pause(5000)
    }

    clickCheckbox(index) {
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
    }
    
}

module.exports = new Home()