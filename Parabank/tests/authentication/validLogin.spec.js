import { test } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
});

test('TC01 - Valid Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage();

    /*
       Use registered user credentials
    */

    await login.login(
        'john',
        'demo'
    );

    await login.verifyLoginSuccess();

    console.log(' Valid Login Successful');
});