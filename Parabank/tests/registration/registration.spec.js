import { test, expect } from '@playwright/test';
import RegisterPage from '../../pages/RegisterPage';

test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
});

test.describe('Registration Module', () => {
     test('TC01 - Valid Registration', async ({ page }) => {
          const register = new RegisterPage(page);
          const user = {
               firstName: 'Prateek',
               lastName: 'Chaturvedi',
               address: 'Pune',
               city: 'Pune',
               state: 'Maharashtra',
               zipCode: '411001',
               phone: '9125349995',
               ssn: '123456789',
               username: 'prateek' + Date.now() ,
               password: 'demo'
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);
          await register.verifyRegistration(
               user.username
          );
          console.log(' Registration Successful');
     });

     test('TC02 - Duplicate Username', async ({ page }) => {

          const register = new RegisterPage(page);
          const user = {
               firstName: 'Prateek',
               lastName: 'Chaturvedi',
               address: 'Pune',
               city: 'Pune',
               state: 'Maharashtra',
               zipCode: '411001',
               phone: '9125349995',
               ssn: '123456789',
               username:
               'duplicateUser' +
               Math.floor(Math.random()*1000),
               password: 'demo'
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);
          await register.gotoRegisterPage();
          await register.registerUser(user);
          await expect(
               page.locator(
                    'text=This username already exists.'
               )
          ).toBeVisible();
          console.log(
               ' Duplicate User Validation Done'
          );
     });
     
     test('TC03 - Empty Fields Validation', async ({ page }) => {

          const register = new RegisterPage(page);
          await register.gotoRegisterPage();
          await page.locator(
               'input[value="Register"]'
          ).click();
          await expect(
               page.locator('.error').first()
          ).toBeVisible();
          console.log('Empty Field Validation Done');
     });


     test('TC04 - Password Mismatch', async ({ page }) => {
          const register = new RegisterPage(page);
          await register.gotoRegisterPage();
          await register.firstName.fill('Prateek');
          await register.lastName.fill('Chaturvedi');
          await register.username.fill(
               'demo' + Date.now()
          );
          await register.password.fill('admin@123');
          await register.confirmPassword.fill(
               'wrongPassword'
          );
          await register.registerButton.click();
          await expect(
               page.locator('.error').first()
          ).toBeVisible();
          console.log(' Password Mismatch Validation Done');
     });

     test('TC05 - Invalid Phone Validation', async ({ page }) => {

          const register = new RegisterPage(page);
          const user = {
               firstName: 'Prateek',
               lastName: 'Chaturvedi',
               address: 'Pune',
               city: 'Pune',
               state: 'MH',
               zipCode: '411001',
               phone: 'abcd123',
               ssn: '123456789',
               // username: 'john' + Date.now() + Math.floor(Math.random() * 10000),
               username: 'john' + Date.now() ,
               password: 'demo'
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);
          console.log(' Invalid Phone Test Executed');
     });


     test('TC06 - Invalid ZIP Code', async ({ page }) => {

          const register = new RegisterPage(page);
          const user = {

               firstName: 'Prateek',
               lastName: 'Chaturvedi',
               address: 'Pune',
               city: 'Pune',
               state: 'MH',
               zipCode: 'abc123',
               phone: '9876543210',
               ssn: '123456789',
               username: 'zipUser' + Date.now(),
               password: 'demo'
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);
          console.log(' Invalid ZIP Validation Executed');
     });

     test('TC07 - Mandatory Fields Validation', async ({ page }) => {

          const register = new RegisterPage(page);
          await register.gotoRegisterPage();
          await register.firstName.fill('Prateek');

          // intentionally leave remaining fields empty
          await register.registerButton.click();
          await expect(
               page.locator('.error').first()
          ).toBeVisible();

          console.log(' Mandatory Fields Validation Done');
     });

     test('TC08 - Special Characters Validation', async ({ page }) => {

          const register = new RegisterPage(page);
          const user = {
               firstName: '@@@###',
               lastName: '$$$%%%',
               address: '***&&&',
               city: '!!!@@@',
               state: 'MH',
               zipCode: '411001',
               phone: '9876543210',
               ssn: '123456789',
               username: 'special' + Date.now(),
               password: 'demo'
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);

          console.log(' Special Character Validation Executed');
     });


     test('TC09 - Long Input Validation', async ({ page }) => {

          const register = new RegisterPage(page);
          const longText =
               'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

          const user = {
               firstName: longText,
               lastName: longText,
               address: longText,
               city: longText,
               state: 'MH',
               zipCode: '411001',
               phone: '9876543210',
               ssn: '123456789',
               username: 'longUser' + Date.now(),
               password: 'demo'
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);
          console.log(' Long Input Validation Executed');
     });

     test('TC10 - Invalid SSN Validation', async ({ page }) => {

          const register = new RegisterPage(page);
          const user = {
               firstName: 'Prateek',
               lastName: 'Chaturvedi',
               address: 'Pune',
               city: 'Pune',
               state: 'MH',
               zipCode: '411001',
               phone: '9125349995',
               ssn: 'abcd123',
               username: 'ssnUser' + Date.now(),
               password: 'demo'
          };

          await register.gotoRegisterPage();
          await register.registerUser(user);

          console.log(' Invalid SSN Validation Executed');
     });

     test('TC11 - Username Validation', async ({ page }) => {

          const register = new RegisterPage(page);
          const user = {
               firstName: 'Prateek',
               lastName: 'Chaturvedi',
               address: 'Pune',
               city: 'Pune',
               state: 'MH',
               zipCode: '411001',
               phone: '912534995',
               ssn: '123456789',
               username: 'ab',
               password: 'demo'
          };

          await register.gotoRegisterPage();
          await register.registerUser(user);

          console.log(' Username Validation Executed');
     });


     test('TC12 - Complete Registration Flow', async ({ page }) => {
          const register = new RegisterPage(page);
          const user = {

               firstName: 'Prateek',
               lastName: 'Chaturvedi',
               address: 'Pune',
               city: 'Pune',
               state: 'MH',
               zipCode: '411001',
               phone: '9125349995',
               ssn: '123456789',
               // username: 'flowUser' + Date.now() + Math.floor(Math.random() * 10000),
               username:`user_${Math.random().toString(36).substring(2, 12)}`,
               password: 'demo'
          };

          await register.gotoRegisterPage();

          await register.registerUser(user);

          await register.verifyRegistration(
               user.username
          );

          console.log(' Complete Registration Flow Successful');
     });

})