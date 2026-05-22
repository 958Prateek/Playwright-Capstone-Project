import { expect } from '@playwright/test';

class LoginPage {

    constructor(page) {

        this.page = page;

        this.usernameInput =
            page.locator('input[name="username"]');

        this.passwordInput =
            page.locator('input[name="password"]');

        this.loginButton =
            page.locator('input[value="Log In"]');

        this.logoutLink =
            page.locator('text=Log Out');

        this.errorMessage =
            page.locator('.error');

        this.accountOverviewText =
            page.locator('h1.title');
    }

    async gotoLoginPage() {

        await this.page.goto(
            'https://parabank.parasoft.com/parabank/index.htm'
        );
    }

    async login(username, password) {

        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }

    async logout() {

        await this.logoutLink.waitFor({
            state: 'visible'
        });

        await this.logoutLink.click();
    }

    async verifyLoginSuccess() {

        await expect(
            this.accountOverviewText
        ).toContainText('Accounts Overview');
    }

    async verifyInvalidLogin() {

        await expect(
            this.errorMessage
        ).toBeVisible();
    }
}

export default LoginPage;