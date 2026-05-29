import { test, expect } from '@playwright/test';
import RegisterPage from '../../POM/RegisterPage';
import registerData from '../../test-data/registerData.json';

test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
});

test.describe('Registration Module', () => {
     test('TC01 - Valid Registration', async ({ page }) => {
          const register = new RegisterPage(page);
          const user = {
               ...registerData.validUser,

               username:  'prateek' + Date.now()
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
                ...registerData.validUser,

                username:'duplicateUser' + Math.floor(Math.random()*1000)
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);
          await page.goto(
               'https://parabank.parasoft.com/parabank/logout.htm'
          );
          await page.goto(
               'https://parabank.parasoft.com/parabank/register.htm'
          );
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
               ...registerData.validUser,

               phone: 'abcd123',
               username:
                    'john' + Date.now()
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);
          console.log(' Invalid Phone Test Executed');
     });


     test('TC06 - Invalid ZIP Code', async ({ page }) => {

          const register = new RegisterPage(page);
          const user = {
                ...registerData.validUser,

               zipCode: 'abc123',
               username: 'zipUser' + Date.now()
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
               ...registerData.validUser,

               firstName: '@@@###',
               lastName: '$$$%%%',
               username: 'special' + Date.now()
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
                ...registerData.validUser,

               firstName: longText,
               lastName: longText,
               username:
                    'longUser' + Date.now()
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);
          console.log(' Long Input Validation Executed');
     });

     test('TC10 - Invalid SSN Validation', async ({ page }) => {

          const register = new RegisterPage(page);
          const user = {
                ...registerData.validUser,

               ssn: 'abcd123',
               username: 'ssnUser' + Date.now()
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);

          console.log(' Invalid SSN Validation Executed');
     });

     test('TC11 - Username Validation', async ({ page }) => {

          const register = new RegisterPage(page);
          const user = {
              ...registerData.validUser,

              username: 'ab'
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);
          console.log(' Username Validation Executed');
     });


     test('TC12 - Complete Registration Flow', async ({ page }) => {
          const register = new RegisterPage(page);
          const user = {
               ...registerData.validUser,

               username: `user_${Math.random().toString(36).substring(2,12)}`
          };

          await register.gotoRegisterPage();
          await register.registerUser(user);
          await register.verifyRegistration(user.username);
          console.log(' Complete Registration Flow Successful');
     });

     test('TC13 - Duplicate Phone Number Validation', async ({ page }) => {
          const register = new RegisterPage(page);
          const user = {
               ...registerData.validUser,
               username: 'phoneUser' + Date.now()
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);
          await page.goto(
               'https://parabank.parasoft.com/parabank/logout.htm'
          );
          await page.goto(
               'https://parabank.parasoft.com/parabank/register.htm'
          );
          const secondUser = {
               ...registerData.validUser,
               phone: user.phone,
               username:'secondPhoneUser'+ Date.now()
          };
          await register.registerUser(secondUser);
          console.log(
               ' Duplicate Phone Validation Executed'
          );
     });

     test('TC14 - Registration Page Title Validation', async ({ page }) => {
          const register = new RegisterPage(page);
          await register.gotoRegisterPage();
          await expect(page.locator('.title')).toContainText('Signing up is easy!')
     });

     test('TC15 - Registration Form Reset Validation', async ({ page }) => {
          const register = new RegisterPage(page);
          await register.gotoRegisterPage();
          await register.firstName.fill('Prateek');
          await register.lastName.fill( 'Chaturvedi');
          await page.reload();
          await expect(register.firstName).toHaveValue('');
          await expect(register.lastName ).toHaveValue('');
          console.log(' Registration Form Reset Verified');
     });


})