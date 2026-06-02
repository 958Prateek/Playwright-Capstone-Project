import { expect } from '@playwright/test';

export default class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginBtn = page.locator('input[value="Log In"]');
        this.accountOverview = page.locator('h1.title');
        this.logoutLink = page.locator('a[href*="logout"]');
    }

    async gotoLoginPage() {
        await this.page.goto(
            'https://parabank.parasoft.com/parabank/index.htm',
            { waitUntil: 'domcontentloaded' }
        );
    }
    async login(username, password) {
        
        // await this.username.clear('');
        // await this.username.fill(username);
        // await this.password.clear('');
        // await this.password.fill(password);
        await this.username.fill(username);
        await this.password.fill(password);
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
            this.loginBtn.click(),
            this.page.waitForLoadState('domcontentloaded')
        ]);
        // await this.loginBtn.click();
        // await this.page.waitForURL(
        //     '**/overview.htm',
        //     { timeout: 15000 }
        // );
    }

    async logout() {
        await this.logoutLink.click();
    }
    async verifyLoginSuccess() {
        await expect(
            this.page.locator('body')
        ).toContainText(
            'Accounts Overview',
            { timeout: 15000 }
        );
    }

    async verifyInvalidLogin() {
        await expect(
            this.page.locator('body')
        ).toContainText(
            'The username and password could not be verified'
        );
    }

    async verifyEmptyCredentials() {
    await expect(
        this.page.locator('body')
    ).toContainText(
        'Please enter a username and password.'
    );
}
}