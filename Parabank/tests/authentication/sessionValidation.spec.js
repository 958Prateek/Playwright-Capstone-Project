import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
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