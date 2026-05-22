import { test } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
});

test('TC02 - Invalid Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage();

    await login.login(
        'wrongUser',
        'wrongPassword'
    );

    await login.verifyInvalidLogin();

    console.log('✅ Invalid Login Verified');
});