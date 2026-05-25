class BasePage {

    constructor(page) {

        this.page = page;
    }

    async click(locator) {

        await locator.click();
    }

    async fill(locator, value) {

        await locator.fill(value);
    }

    async getText(locator) {

        return await locator.textContent();
    }

    async wait(time) {

        await this.page.waitForTimeout(time);
    }
}
export default BasePage;