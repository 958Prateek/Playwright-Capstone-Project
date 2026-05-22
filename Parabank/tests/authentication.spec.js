import { test } from '@playwright/test';

import LoginPage from '../pages/LoginPage';

test.describe('Authentication Module', () => {

    test('Valid Login', async ({ page }) => {

        const login = new LoginPage(page);

        await login.gotoLoginPage();

        await login.login('admin123', 'Admin@123');

        await login.verifyLoginSuccess();

        console.log(' Valid Login Successful');
    });

    test('Invalid Login', async ({ page }) => {

        const login = new LoginPage(page);

        await login.gotoLoginPage();

        await login.login(
            'wrongUser',
            'wrongPassword'
        );

        await login.verifyInvalidLogin();

        console.log('Invalid Login Verified');
    });

    test('Logout Validation', async ({ page }) => {

        const login = new LoginPage(page);

        await login.gotoLoginPage();

        await login.login('admin123', 'Admin@123');

        await login.verifyLoginSuccess();

        await login.logout();

        console.log('Logout Successful');
    });
});