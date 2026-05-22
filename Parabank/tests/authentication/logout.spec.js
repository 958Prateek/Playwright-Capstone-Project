import { test } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
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