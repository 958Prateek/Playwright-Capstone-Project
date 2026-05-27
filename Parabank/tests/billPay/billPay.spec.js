import { test, expect } from '@playwright/test';
import RegisterPage from '../../POM/RegisterPage';
import OpenAccountPage from '../../POM/OpenAccountPage';
import BillPayPage from '../../POM/BillPayPage';
import registerData from '../../test-data/registerData.json';
import billPayData from '../../test-data/billPayData.json';

test.describe('Bill Pay Module', () => {
     let user;
     test.beforeEach(async ({ page }) => {
          const register = new RegisterPage(page);
          const openAccount = new OpenAccountPage(page);
          user = {
               ...registerData.validUser,
               username: 'user_' + Date.now()
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);
          await register.verifyRegistration(user.username);
          await openAccount.openNewAccount('1');
     });

     test('TC01 - Valid bill Payment', async ({ page }) => {
          const billPay = new BillPayPage(page);
          await billPay.payBill(billPayData.billPayUser);
          await billPay.verifyBillPaymentSuccess();
          console.log('Valid bill payment');
     });

     test('TC02 - decimal Amount payment', async ({ page }) => {
          const billPay = new BillPayPage(page);
          const paymentData = {
               ...billPayData.billPayUser,
               amount: billPayData.decimalPayment.amount
          };
          await billPay.payBill(paymentData);
          await billPay.verifyBillPaymentSuccess();
          console.log('decimal payment successful');
     });

     test('TC03 - Empty Amount Validation', async ({ page }) => {
          const billPay = new BillPayPage(page);
          const paymentData = {
               ...billPayData.billPayUser,
               amount: billPayData.emptyPayment.amount
          };
          await billPay.payBill(paymentData);
          console.log(' Empty Amount Validation Done');
     });


     test('TC04 - Payee Name Visibility', async ({ page }) => {
          const billPay = new BillPayPage(page);
          await billPay.gotoBillPayPage();
          await expect(billPay.payeeName).toBeVisible();
          console.log('Payee Name Field Visible');
     });


     test('TC05 - Account Number ', async ({ page }) => {
          const billPay = new BillPayPage(page);
          await billPay.gotoBillPayPage();
          await expect(billPay.account).toBeVisible();
          console.log('Account Number  Visible');
     });

     test('TC06 - Bill Pay Page Visibility', async ({ page }) => {
          const billPay = new BillPayPage(page);
          await billPay.gotoBillPayPage();
          await billPay.verifyBillPayPageVisible();
          console.log(' Bill Pay Page Visible');
     });

     test('TC07 - Send Payment Button ', async ({ page }) => {
          const billPay = new BillPayPage(page);
          await billPay.gotoBillPayPage();
          await expect(billPay.sendPaymentButton).toBeVisible();
          console.log('Send Payment Button Visible');
     });


     test('TC08 - Amount Field Visibility', async ({ page }) => {
          const billPay = new BillPayPage(page);
          await billPay.gotoBillPayPage();
          await expect(billPay.amount).toBeVisible();
          console.log(' Amount Field Visible');
     });


     test('TC09 - Bill Payment Confirmation', async ({ page }) => {
          const billPay = new BillPayPage(page);
          await billPay.payBill(billPayData.billPayUser);
          await billPay.verifyBillPaymentSuccess();
          console.log(' Bill Payment Confirmation Verified');
     });


     test('TC10 - Session Persistence Validation', async ({ page }) => {
          const billPay = new BillPayPage(page);
          await billPay.gotoBillPayPage();
          await billPay.refreshPage();
          await billPay.verifyBillPayPageVisible();
          console.log('Session Persistence Verified');
     });


     test('TC11 - Unauthorized Access Validation', async ({ page }) => {
          await page.goto('https://parabank.parasoft.com/parabank/logout.htm');
          await page.goto('https://parabank.parasoft.com/parabank/billpay.htm');
          await expect(page.locator('input[value="Log In"]')).toBeVisible();
          console.log(' Unauthorized Access Blocked');
     });


     test('TC12 - UI Validation', async ({ page }) => {
          const billPay = new BillPayPage(page);
          await billPay.gotoBillPayPage();
          await expect(billPay.payeeName).toBeVisible();
          await expect(billPay.sendPaymentButton).toBeVisible();
          console.log(' UI Validation Done');
     });


     test('TC13 - Workflow Validation', async ({ page }) => {
          const billPay = new BillPayPage(page);
          await billPay.gotoBillPayPage();
          await billPay.payBill(billPayData.billPayUser);
          await billPay.verifyBillPaymentSuccess();
          console.log('Workflow Validation Done');
     });

     test('TC14 - Bill Pay URL Validation', async ({ page }) => {
          const billPay = new BillPayPage(page);
          await billPay.gotoBillPayPage();
          await expect(page).toHaveURL(/billpay.htm/);
          console.log('Bill Pay URL Verified');
     });


     test('TC15 - Multiple Bill Payments', async ({ page }) => {
          const billPay = new BillPayPage(page);
          await billPay.payBill(billPayData.billPayUser);
          await billPay.verifyBillPaymentSuccess();
          await billPay.payBill(billPayData.billPayUser);
          await billPay.verifyBillPaymentSuccess();
          console.log('Multiple Bill Payments Successful');
     });

     //     test.describe.configure({
     //         mode: 'parallel'
     //     });

});
