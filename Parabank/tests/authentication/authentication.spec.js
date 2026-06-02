import { test, expect } from '@playwright/test';
import LoginPage from '../../POM/LoginPage';
import loginData from '../../test-data/loginData.json';

test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
    await page.goto(
        'https://parabank.parasoft.com/parabank/logout.htm'
    );
});


test('TC01 - Valid Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await login.verifyLoginSuccess();
    console.log(' Valid Login Successful');
});


test('TC02 - Invalid Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );
    await login.verifyInvalidLogin();
    console.log('Invalid Login Verified');
});


test('TC03 - Logout Validation', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await login.verifyLoginSuccess();
    await login.logout();
    console.log(' Logout Successful');
});


test('TC04 - Empty Credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(loginData.emptyUser.username, loginData.emptyUser.password);
    // await login.verifyInvalidLogin();
    await login.verifyEmptyCredentials();
    console.log(' Empty Credential Validation Done');
});


test('TC05 - Session Validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await login.verifyLoginSuccess();
    await page.reload();
    await expect(
        page.getByRole('heading', {
            name: 'Accounts Overview'
        })
    ).toBeVisible();
    console.log(' Session Persistence Verified');
});



test('TC06 - Invalid Password Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        loginData.invalidPasswordUser.username,
        loginData.invalidPasswordUser.password
    );
    await login.verifyInvalidLogin();
    await expect(page.locator('body')).toContainText(
        'Error!'
    );
    console.log(
        ' Invalid Password Validation Done'
    );
});


test('TC07 - Password Masking Validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    const passwordField =
        page.locator('input[name="password"]');
    await expect(passwordField)
        .toHaveAttribute('type', 'password');
    console.log(' Password Masking Verified');
});


test.skip('TC08 - Multiple Login Attempts', async ({ page }) => {
    const login = new LoginPage(page);
    for (let i = 0; i < 3; i++) {
        await login.gotoLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        await expect(
            page.locator('input[name="username"]')
        ).toBeVisible();
        await login.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password
        );
        await login.verifyInvalidLogin();
    }
    console.log(' Multiple Login Attempts Tested');
});


test('TC09 - Browser Back Validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await login.verifyLoginSuccess();
    await login.logout();
    await page.goBack();
    await expect(
        page.locator('body')
    ).toContainText('Accounts Overview');

    console.log(' Browser Back Validation Done');
});


test('TC10 - Remember Me Validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await login.verifyLoginSuccess();
    await page.reload();
    await login.verifyLoginSuccess();
    console.log(' Remember Me Validation Done');
});


test('TC11 - Unauthorized Access Validation', async ({ page }) => {
    await page.goto(
        'https://parabank.parasoft.com/parabank/overview.htm'
    );
    await expect(
        page.locator('input[value="Log In"]')
    ).toBeVisible();
    console.log(' Unauthorized Access Validation Done');
});


test('TC12 - Concurrent Login Validation', async ({ browser }) => {
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    const login1 = new LoginPage(page1);
    await login1.gotoLoginPage();
    await login1.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await login1.verifyLoginSuccess();
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    const login2 = new LoginPage(page2);
    await login2.gotoLoginPage();
    await login2.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await login2.verifyLoginSuccess();
    console.log(' Concurrent Login Validation Done');
});


test('TC13 - Direct URL Access After Logout', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await login.verifyLoginSuccess();
    await login.logout();
    await page.goto(
        'https://parabank.parasoft.com/parabank/overview.htm'
    );
    await expect(
        page.locator('input[value="Log In"]')
    ).toBeVisible();

    console.log(
        'Direct URL Access After Logout Validated'
    );
});


test('TC14 - Login Page Refresh Validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await page.reload();
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    console.log(' Login Page Refresh Validation Done');
});

test('TC15 - SQL Injection Login Validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        "' OR '1'='1",
        "' OR '1'='1",
    );
    await expect(page.locator('body')).not.toContainText('Accounts Overview');
    console.log('SQL Injection Validation done');
});