import { expect } from '@playwright/test';

class RegisterPage {

    constructor(page) {

        this.page = page;

        this.registerLink =
            page.locator('text=Register');

        this.firstName =
            page.locator('#customer\\.firstName');

        this.lastName =
            page.locator('#customer\\.lastName');

        this.address =
            page.locator('#customer\\.address\\.street');

        this.city =
            page.locator('#customer\\.address\\.city');

        this.state =
            page.locator('#customer\\.address\\.state');

        this.zipCode =
            page.locator('#customer\\.address\\.zipCode');

        this.phone =
            page.locator('#customer\\.phoneNumber');

        this.ssn =
            page.locator('#customer\\.ssn');

        this.username =
            page.locator('#customer\\.username');

        this.password =
            page.locator('#customer\\.password');

        this.confirmPassword =
            page.locator('#repeatedPassword');

        this.registerButton =
            page.locator('input[value="Register"]');

        this.successMessage =
            page.locator('.title');
    }

    async gotoRegisterPage() {

        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');

        await this.registerLink.click();
    }

    async registerUser(user) {

        await this.firstName.fill(user.firstName);

        await this.lastName.fill(user.lastName);

        await this.address.fill(user.address);

        await this.city.fill(user.city);

        await this.state.fill(user.state);

        await this.zipCode.fill(user.zipCode);

        await this.phone.fill(user.phone);

        await this.ssn.fill(user.ssn);

        await this.username.fill(user.username);

        await this.password.fill(user.password);

        await this.confirmPassword.fill(user.password);

        await this.registerButton.click();
    }

    async verifyRegistrationSuccess(username) {

    await expect(this.successMessage)
        .toContainText(`Welcome ${username}`);
}

 
}

export default RegisterPage;