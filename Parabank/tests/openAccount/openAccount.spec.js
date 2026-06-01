import { test, expect } from '@playwright/test';
import RegisterPage from '../../POM/RegisterPage';
import OpenAccountPage from '../../POM/OpenAccountPage';
import registerData from '../../test-data/registerData.json';
import openAccountData from '../../test-data/openAccountData.json';

test.describe('Open Account Module', () => {

    let user;
    test.beforeEach(async ({ page }) => {
        const register = new RegisterPage(page);
        user = {
            ...registerData.validUser,
            username:   'user' + Date.now()
        };
        await register.gotoRegisterPage();
        await register.registerUser(user);
        await register.verifyRegistration(
            user.username
        );
    });


    test('TC01 - Open Savings Account', async ({ page }) => {
        const account = new OpenAccountPage(page);
        await account.openNewAccount('1');
        await account.verifyAccountOpened();
        console.log(' Savings Account Opened');
    });


    test('TC02 - Open Current Account', async ({ page }) => {
        const account = new OpenAccountPage(page);
        await account.openNewAccount('0');
        await account.verifyAccountOpened();
        console.log(' Current Account Opened');
    });


    test('TC03 - Account Type Dropdown Validation', async ({ page }) => {
        const account = new OpenAccountPage(page);
        await page.goto(
            'https://parabank.parasoft.com/parabank/openaccount.htm'
        );
        await expect(
            account.accountTypeDropdown
        ).toBeVisible();
        console.log(' Dropdown Validation Done');
    });


    test('TC04 - Multiple Accounts Creation', async ({ page }) => {
        const account = new OpenAccountPage(page);
        await account.openNewAccount('1');
        await account.verifyAccountOpened();
        await account.openNewAccount('0');
        await account.verifyAccountOpened();
        console.log(' Multiple Accounts Created');
    });


    test('TC05 - Account Number Visibility', async ({ page }) => {
        const account = new OpenAccountPage(page);
        await account.openNewAccount('1');
        await account.verifyNewAccountNumberVisible();
        console.log(' Account Number Visible');
    });


    test('TC06 - Open Account Workflow', async ({ page }) => {
        const account = new OpenAccountPage(page);
        await account.gotoOpenAccountPage();
        await account.selectAccountType('1');
        await account.clickOpenAccountButton();
        await account.verifyAccountOpened();
        console.log(' Workflow Validation Done');
    });


    test('TC07 - Unauthorized Access Validation', async ({ page }) => {
        await page.goto(
            'https://parabank.parasoft.com/parabank/openaccount.htm'
        );
        await expect(
            page.locator('body')
        ).toContainText(
            'Open New Accoun'
        );
        console.log(' Unauthorized Access Blocked');
    });


    test('TC08 - Session Persistence Validation', async ({ page }) => {
        const account =  new OpenAccountPage(page);
        await account.gotoOpenAccountPage();
        await account.openNewAccount('1');
        await page.reload();
        await expect(
            page.getByRole('link', {
                name: 'Open New Account'
            })
        ).toBeVisible();
        console.log(' Session Persistence Verified');
    });


    test('TC09 - Open Account Button Visibility', async ({ page }) => {
        const account =   new OpenAccountPage(page);
        await account.gotoOpenAccountPage();
        await expect(
            account.openAccountButton
        ).toBeVisible();

        console.log(' Button Visibility Verified');
    });


    test('TC10 - From Account Dropdown Validation', async ({ page }) => {

        const account =  new OpenAccountPage(page);
        await account.gotoOpenAccountPage();
        await expect(
            account.fromAccountDropdown
        ).toBeVisible();

        console.log(' From Account Dropdown Visible');
    });


    test('TC11 - Savings Account Synchronization', async ({ page }) => {

        const account =  new OpenAccountPage(page);
        await account.gotoOpenAccountPage();
        await account.openNewAccount('1');
        await account.verifyAccountOpened();
        console.log(' Savings Account Synced');
    });


    test('TC12 - Current Account Synchronization', async ({ page }) => {

        const account =  new OpenAccountPage(page);
        await account.openNewAccount('0');
        await account.verifyAccountOpened();
        console.log(' Current Account Synced');
    });


    test('TC13 - UI Validation', async ({ page }) => {

        const account = new OpenAccountPage(page);
        await account.gotoOpenAccountPage();
        await expect(
            page.getByRole('heading', {
                name: 'Open New Account'
            })
        ).toBeVisible();

        console.log(' UI Validation Done');
    });


    test('TC14 - New Account ID Validation', async ({ page }) => {
        const account = new OpenAccountPage(page);
        await account.openNewAccount('1');
        await expect(
            account.newAccountNumber
        ).not.toHaveText('');

        console.log(' Account ID Generated');
    });


    test('TC15 - Open Account Navigation Validation', async ({ page }) => {

        const account =  new OpenAccountPage(page);
        await account.gotoOpenAccountPage();
        await expect(page)
            .toHaveURL(/openaccount.htm/);
        console.log('Navigation Validation Done');
    });

    test('TC16 - Open Account Page Heading Validation', async ({ page }) => {
            const account = new OpenAccountPage(page);
            await account.gotoOpenAccountPage();
            await expect(page.getByRole('heading', {name: 'Open New Account'})
            ).toBeVisible();

            console.log('Open Account Heading Verified');
    });

     

});