import { test } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
});

test('TC04 - Empty Credentials', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage();

    await login.login('', '');

    await login.verifyInvalidLogin();

    console.log(' Empty Credential Validation Done');
});