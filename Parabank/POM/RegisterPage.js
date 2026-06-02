import { expect } from '@playwright/test';

class RegisterPage {
    constructor(page) {
        this.page = page;
        this.registerLink = page.locator('text=Register');
        this.firstName = page.locator('#customer\\.firstName');
        this.lastName = page.locator('#customer\\.lastName');
        this.address = page.locator('#customer\\.address\\.street');
        this.city = page.locator('#customer\\.address\\.city');
        this.state = page.locator('#customer\\.address\\.state');
        this.zipCode = page.locator('#customer\\.address\\.zipCode');
        this.phone = page.locator('#customer\\.phoneNumber');
        this.ssn = page.locator('#customer\\.ssn');
        this.username = page.locator('#customer\\.username');
        this.password = page.locator('#customer\\.password');
        this.confirmPassword = page.locator('#repeatedPassword');
        this.registerButton = page.locator('input[value="Register"]');
        this.successMessage = page.locator('.title');
    }

    async gotoRegisterPage() {
        await this.page.goto(
            'https://parabank.parasoft.com/parabank/index.htm',
            { waitUntil: 'domcontentloaded',
                timeout: 60000
             }
        );
        await this.registerLink.click();
        await expect(this.firstName).toBeVisible();
    }

    async registerUser(user) {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.firstName).toBeVisible();
        await this.firstName.click();
        await this.firstName.fill(user.firstName);

        await this.lastName.click();
        await this.lastName.fill(user.lastName);

        await this.address.click();
        await this.address.fill(user.address);

        await this.city.click();
        await this.city.fill(user.city);

        await this.state.click();
        await this.state.fill(user.state);

        await this.zipCode.click();
        await this.zipCode.fill(user.zipCode);

        await this.phone.click();
        await this.phone.fill(user.phone);

        await this.ssn.click();
        await this.ssn.fill(user.ssn);

        await this.username.fill(user.username);
        await this.password.fill(user.password);
        await this.confirmPassword.fill(user.confirmPassword || user.password);
        await this.page.waitForTimeout(500);
        await expect(this.registerButton).toBeVisible();
        await this.registerButton.click();
    }

    async verifyRegistration(username) {
        await expect(this.page.locator('#rightPanel')).toContainText(username);
        await expect(
            this.page.locator('body')
        ).toContainText(
            username, { timeout: 15000}
        );

        // await expect(
        //     this.page.locator('body')).toContainText(username,
        //         { timeout: 15000 });
    }


    // async verifyRegistrationSuccess(username) {
    //     await expect(
    //         this.page.locator('#rightPanel')
    //     ).toContainText(username);
    // }
}

export default RegisterPage;