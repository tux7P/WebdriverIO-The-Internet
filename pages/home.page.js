class Home {
    get PageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2')}
    get pageFooter() { return $('#page-footer')}
    get parent() { return $('ul')}
    get child() { return this.parent.$$('li')}

    getLiText() {
        this.child.filter((element) => {
            console.log(element.getText())
        } )
    }
}

module.exports = new Home()