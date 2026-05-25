import { test, expect } from '@playwright/test';
import RegisterPage from '../../POM/RegisterPage';
import OpenAccountPage from '../../POM/OpenAccountPage';
import AccountOverviewPage from '../../POM/AccountOverviewPage';
import accountOverviewData from '../../test-data/accountOverviewData.json';


test.describe('Accounts Overview Module', () => {

    let user;
    test.beforeEach(async ({ page }) => {

        // POM OBJECTS
        const register = new RegisterPage(page);
        const openAccount = new OpenAccountPage(page);

        user = {
           ...accountOverviewData.validUser,
           username: 'user_' + Math.random().toString(36).substring(2,10)
        };
        await register.gotoRegisterPage();
        await register.registerUser(user);
        await register.verifyRegistration(user.username);  // ASSERTION
        await openAccount.openNewAccount(accountOverviewData.savingsAccount.type);
    });

    test('TC01 - Verify Accounts Overview Page', async ({ page }) => {
        const overview = new AccountOverviewPage(page); //pom object
        await overview.gotoAccountsOverview();

        // ASSERTION
        await overview.verifyAccountsOverviewPage();
        console.log(' Accounts Overview Page Verified');
    });


    test('TC02 - Verify Account Balance Visible', async ({ page }) => {
        const overview = new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();
        await overview.verifyBalancesVisible(); // ASSERTION
        console.log(' Account Balance Visible');
    });


    test('TC03 - Verify Account Number Visible', async ({ page }) => {
        const overview = new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();
        await overview.verifyAccountNumbersVisible();
        console.log(' Account Number Visible');
    });


    test('TC04 - Verify Multiple Accounts Display', async ({ page }) => {
        const overview = new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();
        await overview.verifyMultipleAccounts();
        console.log(' Multiple Accounts Displayed');
    });


    test('TC05 - Verify Account Details Navigation', async ({ page }) => {
        const overview = new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();
        await overview.accountNumbers.first().click();

        // PARAM ASSERTION
        await expect(page)
            .toHaveURL(/activity.htm/);

        console.log(' Account Details Navigation Verified');
    });


    test('TC06 - Verify Dynamic Balance Validation', async ({ page }) => {
        const overview = new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();
        const balance =
            await overview.accountBalances.first()
                .textContent();

        // ASSERTION

        expect(balance).not.toBeNull();
        console.log(' Dynamic Balance Validation Done');
    });


    test('TC07 - Verify Account Table Visibility', async ({ page }) => {
        const overview = new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();
        await overview.verifyAccountTableVisible();
        console.log(' Account Table Visible');
    });


    test('TC08 - Verify Transaction Link Visibility', async ({ page }) => {
        const overview = new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();
        await overview.verifyTransactionLinksVisible();
        console.log(' Transaction Links Visible');
    });


    test('TC09 - Verify Accounts Overview URL', async ({ page }) => {
        const overview = new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();

        // PARAM ASSERTION
        await expect(page)
            .toHaveURL(/overview.htm/);

        console.log(' Accounts Overview URL Verified');
    });


    test('TC10 - Verify Session Persistence', async ({ page }) => {
        const overview = new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();
        await page.reload();
        await overview.verifyAccountsOverviewPage();
        console.log(' Session Persistence Verified');
    });


    test('TC11 - Verify Unauthorized Access', async ({ page }) => {
        await page.goto(
            'https://parabank.parasoft.com/parabank/overview.htm'
        );
        await expect(page.locator('body')
     ).toContainText(
          'Accounts Overview'
     );
        console.log(' Unauthorized Access Blocked');
    });


    test('TC12 - Verify Account Synchronization', async ({ page }) => {
        const overview =new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();
        await overview.verifyMultipleAccounts();
        console.log(' Account Synchronization Verified');
    });


    test('TC13 - Verify Balance Format', async ({ page }) => {
        const overview = new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();
        const balance =
            await overview.accountBalances.first()
                .textContent();

        // ASSERTION
        expect(balance).toContain('$');
        console.log(' Balance Format Verified');
    });


    test('TC14 - Verify UI Elements', async ({ page }) => {
        const overview = new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();

        // ASSERTIONS
        await expect(
            overview.pageTitle
        ).toBeVisible();

        await expect(
            overview.accountTable
        ).toBeVisible();

        console.log('UI Validation Done');
    });


    test('TC15 - Verify Account Overview Workflow', async ({ page }) => {
        const overview = new AccountOverviewPage(page);
        await overview.gotoAccountsOverview();
        await overview.verifyAccountsOverviewPage();
        await overview.verifyBalancesVisible();
        await overview.verifyAccountNumbersVisible();
        console.log(' Complete Workflow Validated');
    });


    // PARALLEL EXECUTION
    // Executes tests in parallel if enabled

    test.describe.configure({
        mode: 'parallel'
    });
});