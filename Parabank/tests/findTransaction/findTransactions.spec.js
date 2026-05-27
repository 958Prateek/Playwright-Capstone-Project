import { test, expect } from '@playwright/test';
import RegisterPage from '../../POM/RegisterPage';
import OpenAccountPage from '../../POM/OpenAccountPage';
import TransferFundsPage from '../../POM/TransferFundsPage';
import FindTransactionsPage from '../../POM/FindTransactionsPage';
import registerData from '../../test-data/registerData.json';
import transferData from '../../test-data/transferFundsData.json';
import findData from '../../test-data/findTransactionsData.json';


test.describe('Find Transactions Module', () => {
     let user;

     test.beforeEach(async ({ page }) => {
          const register =
               new RegisterPage(page);
          const openAccount =
               new OpenAccountPage(page);
          const transfer =
               new TransferFundsPage(page);

          user = {
               ...registerData.validUser,

               username: 'user_' + Date.now()
          };
          await register.gotoRegisterPage();
          await register.registerUser(user);
          await register.verifyRegistration(user.username);
          await openAccount.openNewAccount('1');
          await openAccount.openNewAccount('0');
          await transfer.transferFunds(transferData.validTransfer.amount);
     });


     test('TC01 - Search By Valid Transaction ID', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);

          await find.searchByTransactionId(

               findData.validTransactionId.transactionId
          );
          console.log(
               ' Valid Transaction ID Search Successful'
          );
     });


     // TC02

     test('TC02 - Invalid Transaction ID', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);

          await find.searchByTransactionId(

               findData.invalidTransactionId.transactionId
          );

          console.log(
               ' Invalid Transaction ID Validation Done'
          );
     });


     // TC03

     test('TC03 - Search By Date', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);

          await find.searchByDate(

               findData.dateSearch.date
          );

          console.log(
               ' Search By Date Successful'
          );
     });


     // TC04

     test('TC04 - Invalid Date Format', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);

          await find.searchByDate(

               findData.invalidDate.date
          );

          console.log(
               ' Invalid Date Validation Done'
          );
     });


     // TC05

     test('TC05 - Search By Amount', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);

          await find.searchByAmount(

               findData.amountSearch.amount
          );

          console.log(
               ' Search By Amount Successful'
          );
     });


     // TC06

     test('TC06 - Invalid Amount', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);

          await find.searchByAmount(

               findData.invalidAmount.amount
          );

          console.log(
               ' Invalid Amount Validation Done'
          );
     });


     // TC07

     test('TC07 - Empty Transaction Search', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);

          await find.searchByAmount(

               findData.emptySearch.value
          );

          console.log(
               ' Empty Search Validation Done'
          );
     });


     // TC08

     test('TC08 - Find Transactions Page Visibility', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);

          await find.gotoFindTransactionsPage();

          // ASSERTION

          await find.verifyFindTransactionsPageVisible();

          console.log(
               ' Find Transactions Page Visible'
          );
     });


     // TC09

     test('TC09 - Transaction ID Field Visibility', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);

          await find.gotoFindTransactionsPage();

          // ASSERTION

          await expect(
               find.transactionIdInput
          ).toBeVisible();

          console.log(
               ' Transaction ID Field Visible'
          );
     });


     // TC10

     test('TC10 - Amount Field Visibility', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);
          await find.gotoFindTransactionsPage();
          await expect(
               find.amountInput
          ).toBeVisible();

          console.log(
               ' Amount Field Visible'
          );
     });


     test('TC11 - Date Field Visibility', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);

          await find.gotoFindTransactionsPage();
          await expect(
               find.dateInput
          ).toBeVisible();

          console.log(
               ' Date Field Visible'
          );
     });


     // TC12

     test('TC12 - Find Transaction Button Visibility', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);

          await find.gotoFindTransactionsPage();

          await expect(
               find.findByAmountButton
          ).toBeVisible();

          console.log(
               'Find Transaction Button Visible'
          );
     });

     test('TC13 - Session Persistence Validation', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);
          await find.gotoFindTransactionsPage();

          // SESSION VALIDATION
          await find.refreshPage();
          await find.verifyFindTransactionsPageVisible();
          console.log(' Session Persistence Verified');
     });


     // TC14

     test('TC14 - Unauthorized Access Validation', async ({ page }) => {
          await page.goto('https://parabank.parasoft.com/parabank/logout.htm');
          await page.goto('https://parabank.parasoft.com/parabank/findtrans.htm');

          // ASSERTION
          await expect(
               page.locator('input[value="Log In"]')
          ).toBeVisible();

          console.log(
               ' Unauthorized Access Blocked'
          );
     });


     // TC15

     test('TC15 - UI Validation', async ({ page }) => {

          const find =
               new FindTransactionsPage(page);

          await find.gotoFindTransactionsPage();
          await expect(
               find.amountInput
          ).toBeVisible();

          await expect(
               find.findByAmountButton
          ).toBeVisible();

          console.log(
               ' UI Validation Done'
          );
     });


     // PARALLEL EXECUTION

     test.describe.configure({
          mode: 'parallel'
     });
});