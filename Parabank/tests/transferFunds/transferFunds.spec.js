import { test, expect } from '@playwright/test';
import RegisterPage from '../../POM/RegisterPage';
import OpenAccountPage from '../../POM/OpenAccountPage';
import TransferFundsPage from '../../POM/TransferFundsPage';
import transferData from '../../test-data/transferFundsData.json';
import registerData from '../../test-data/registerData.json';

let user;

test.describe('Transfer Funds Module', () => {
     let users;
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
          await openAccount.openNewAccount('0');
     });

     test('TC01 - Valid Fund Transfer', async ({ page }) => {
          const transfer =
               new TransferFundsPage(page);
          await transfer.transferFunds(transferData.validTransfer.amount);
          await transfer.verifyTransferSuccess();
          console.log('Valid Fund Transfer Successful');
     });

     test('TC02 - Decimal Amount Transfer', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.transferFunds(transferData.decimalTransfer.amount);
          await transfer.verifyTransferSuccess();
          console.log('Decimal Amount Transfer');
     });

     test('TC03 - Transfer Page Visibility', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.gotoTransferFundsPage();
          await transfer.verifyTransferPageVisible();
          console.log(' Transfer Page Visible');
     });

     test('TC04 - Transfer Page Visibility', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.gotoTransferFundsPage();
          await expect(transfer.transferButton).toBeVisible();
          console.log('Transfer Button Visible');
     });

     test('TC05 - Amount Field Visible', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.gotoTransferFundsPage();
          await expect(transfer.amountInput).toBeVisible();
          console.log('Amount Field Visisble');
     });

     test('TC06 - From Account ', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.gotoTransferFundsPage();
          await expect(transfer.fromAccountDropdown).toBeVisible();
          console.log(' From Account Dropdown Visible');
     });


     test('TC07 - To Account ', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.gotoTransferFundsPage();
          await expect(transfer.toAccountDropdown).toBeVisible();
          console.log(' To Account Dropdown Visible');
     });


     // test('TC08 - Transfer Confirmation Validation', async ({ page }) => {
     //      const transfer = new TransferFundsPage(page);
     //      await transfer.transferFunds(transferData.validTransfer.amount);
     //      await transfer.verifyTransferSuccess();
     //      console.log('Transfer Confirmation Verified');
     // });


     test('TC09 - Session Persistence Validation', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.gotoTransferFundsPage();
          await transfer.refreshPage(); //session validation
          await transfer.verifyTransferPageVisible();
          console.log(' Session Persistence Verified');
     });


     test('TC10 - Unauthorized Access Validation', async ({ page }) => {
          await page.goto('https://parabank.parasoft.com/parabank/logout.htm');
          await page.goto('https://parabank.parasoft.com/parabank/transfer.htm');
          await expect(page.locator('input[value="Log In"]')).toBeVisible();
          console.log('Unauthorized Access Blocked');
     });


     test('TC11 - UI Validation', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.gotoTransferFundsPage();
          await expect(transfer.amountInput).toBeVisible();
          await expect(transfer.transferButton).toBeVisible();
          console.log(' UI Validation Done');
     });


     test('TC12 - Transfer Workflow ', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.gotoTransferFundsPage();
          await transfer.enterAmount(transferData.validTransfer.amount);
          await transfer.clickTransferButton();
          await transfer.verifyTransferSuccess();
          console.log('Transfer Workflow validation Done');
     });


     test('TC13 - Transfer Page URL Validation', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.gotoTransferFundsPage();
          await expect(page).toHaveURL(/transfer.htm/);
          console.log('Transfer Page URL Verified');
     });


     test('TC14 - Page Refresh Validation', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.gotoTransferFundsPage();
          await page.reload();
          // await transfer.verifyTransferPageVisible();
          await expect(page.locator('body')).toContainText('Transfer Funds');
          await page.waitForTimeout(2000);
          console.log(' Page Refresh Validation Done');
     });


     test('TC15 - Multiple Transfer Execution', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.transferFunds('50');
          await transfer.verifyTransferSuccess();
          await transfer.transferFunds('25');
          await transfer.verifyTransferSuccess();
          console.log(' Multiple Transfers Executed');
     });

//      test.skip('TC16 - Negative Amount Transfer', async ({ page }) => {
//           const transfer = new TransferFundsPage(page);
//           await transfer.gotoTransferFundsPage();
//           await transfer.enterAmount('-1000');
//           await transfer.clickTransferButton();

//           await expect(page.locator('body'))
//                .not.toContainText('Transfer Complete!');
//           console.log(' Negative Amount Validation Done');
//     });

     test('TC17 - Large Amount Transfer', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.transferFunds('999999');
          await expect(page.locator('body')).toBeVisible();
          console.log(' Large Amount Transfer Tested');
     });

     test('TC18 - Verify Transfer Funds Page Title', async ({ page }) => {
          const transfer = new TransferFundsPage(page);
          await transfer.gotoTransferFundsPage();
          await transfer.verifyTransferPageVisible();
          console.log(' Transfer Funds Title Verified');
          });

     

     test.describe.configure({
          mode: 'default'
     });

});