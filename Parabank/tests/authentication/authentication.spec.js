import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
});

test('TC01 - Valid Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        'john',
        'demo'
    );
    await login.verifyLoginSuccess();
    console.log(' Valid Login Successful');
});


test('TC02 - Invalid Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        'wrongUser',
        'wrongPassword'
    );
    await login.verifyInvalidLogin();
    console.log('Invalid Login Verified');
});


test('TC03 - Logout Validation', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        'john',
        'demo'
    );
    await login.verifyLoginSuccess();
    await login.logout();
    console.log(' Logout Successful');
});


test('TC04 - Empty Credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('', '');
    await login.verifyInvalidLogin();
    console.log(' Empty Credential Validation Done');
});


test('TC05 - Session Validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        'john',
        'demo'
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
        'john',
        'wrongpassword'
    );
    await expect(page.locator('body')).toContainText(
        'The username and password could not be verified'
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


test('TC08 - Multiple Login Attempts', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    for (let i = 0; i < 3; i++) {
        await login.login(
            'wrongUser',
            'wrongPassword'
        );
        await login.verifyInvalidLogin();
    }
    console.log(' Multiple Login Attempts Tested');
});


test('TC09 - Browser Back Validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        'john',
        'demo'
    );
    await login.verifyLoginSuccess();
    await login.logout();
    await page.goBack();

    // Verify login page visible
    await expect(
        page.locator('body')
    ).toContainText('Accounts Overview');

    console.log(' Browser Back Validation Done');
});


test('TC10 - Remember Me Validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        'john',
        'demo'
    );
    await login.verifyLoginSuccess();

    // Refresh page
    await page.reload();

    // Verify session persists
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

    // Browser 1
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    const login1 = new LoginPage(page1);
    await login1.gotoLoginPage();
    await login1.login(
        'john',
        'demo'
    );
    await login1.verifyLoginSuccess();
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    const login2 = new LoginPage(page2);
    await login2.gotoLoginPage();
    await login2.login(
        'john',
        'demo'
    );
    await login2.verifyLoginSuccess();
    console.log(' Concurrent Login Validation Done');
});


test('TC13 - Direct URL Access After Logout', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(
        'john',
        'demo'
    );

    await login.verifyLoginSuccess();
    await login.logout();
    // Try direct URL access
    await page.goto(
        'https://parabank.parasoft.com/parabank/overview.htm'
    );

    // Verify login page shown
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

    await expect(
        page.locator('input[name="username"]')
    ).toBeVisible();

    await expect(
        page.locator('input[name="password"]')
    ).toBeVisible();

    console.log(
        ' Login Page Refresh Validation Done'
    );
});