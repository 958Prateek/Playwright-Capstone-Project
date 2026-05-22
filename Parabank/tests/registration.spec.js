import { test } from '@playwright/test';

import RegisterPage from '../pages/RegisterPage';

import LoginPage from '../pages/LoginPage';

test('Register and Login Authentication', async ({ page }) => {

    const register = new RegisterPage(page);

    const login = new LoginPage(page);

    // Create unique user
    const user = {

        firstName: 'Prateek',

        lastName: 'Chaturvedi',

        address: 'Mumbai',

        city: 'Mumbai',

        state: 'Maharashtra',

        zipCode: '411001',

        phone: '9125349995',

        ssn: '123456789',

        username: 'prateek' + Date.now(),

        password: 'admin@123'
    };

    // REGISTER USER
    await register.gotoRegisterPage();

    await register.registerUser(user);

    await register.verifyRegistrationSuccess(
    user.username);

    console.log('Registration Successful');

    console.log('Username:', user.username);

    console.log('Password:', user.password);

    // LOGOUT
    await login.logout();

    console.log('Logout Successful');

    // LOGIN AGAIN
    await login.login(
        user.username,
        user.password
    );

    // VERIFY LOGIN
    await login.verifyLoginSuccess();

    console.log(' Authentication Successful');
});