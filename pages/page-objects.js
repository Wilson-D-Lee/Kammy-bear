// pages/BasePage.js
class BasePage {
    constructor(page) {
        this.page = page;
    }

    //use this page for the page object model. 
    async NameOfTheFuncion() {
        await this.page.pause(); 
    }
}

module.exports = BasePage;
