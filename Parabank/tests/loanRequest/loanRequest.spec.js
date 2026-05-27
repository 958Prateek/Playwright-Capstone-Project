import { test, expect } from '@playwright/test';

import RegisterPage from '../../POM/RegisterPage';
import OpenAccountPage from '../../POM/OpenAccountPage';
import LoanRequestPage from '../../POM/LoanRequestPage';
import registerData from '../../test-data/registerData.json';
import loanData from '../../test-data/loanData.json';

test.describe('Loan Request Module', () => {

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

     test('TC01 - Valid Loan Request', async ({ page }) => {
          const loan = new LoanRequestPage(page);
          await loan.applyLoan(loanData.validLoan);
          await loan.verifyLoanApproved();
          console.log(' Valid Loan Request Successful');
     });


     test('TC02 - Invalid Loan Amount', async ({ page }) => {
          const loan = new LoanRequestPage(page);
          await loan.applyLoan(loanData.invalidLoan);
          console.log(' Invalid Loan Amount Validation Done');
     });

     test('TC03 - Empty Loan Amount', async ({ page }) => {
          const loan = new LoanRequestPage(page);
          await loan.applyLoan(loanData.emptyLoan);
          console.log('Empty Loan Amount Validation Done');
     });


     test('TC04 - Invalid Down Payment', async ({ page }) => {
          const loan = new LoanRequestPage(page);
          await loan.applyLoan(loanData.invalidDownPayment);
          console.log(' Invalid Down Payment Validation Done');
     });


     // TC05

     test('TC05 - Empty Down Payment', async ({ page }) => {

          const loan =
               new LoanRequestPage(page);

          await loan.applyLoan(
               loanData.emptyDownPayment
          );

          console.log(
               ' Empty Down Payment Validation Done'
          );
     });


     // TC06

     test('TC06 - Loan Request Page Visibility', async ({ page }) => {

          const loan =
               new LoanRequestPage(page);

          await loan.gotoLoanRequestPage();

          await loan.verifyLoanPageVisible();

          console.log(
               ' Loan Request Page Visible'
          );
     });


     // TC07

     test('TC07 - Loan Amount Field Visibility', async ({ page }) => {

          const loan =
               new LoanRequestPage(page);

          await loan.gotoLoanRequestPage();

          await expect(
               loan.loanAmountInput
          ).toBeVisible();

          console.log(
               ' Loan Amount Field Visible'
          );
     });


     // TC08

     test('TC08 - Down Payment Field Visibility', async ({ page }) => {

          const loan =
               new LoanRequestPage(page);

          await loan.gotoLoanRequestPage();

          await expect(
               loan.downPaymentInput
          ).toBeVisible();

          console.log(
               ' Down Payment Field Visible'
          );
     });


     // TC09

     test('TC09 - Apply Button Visibility', async ({ page }) => {

          const loan =
               new LoanRequestPage(page);

          await loan.gotoLoanRequestPage();

          await expect(
               loan.applyButton
          ).toBeVisible();

          console.log(
               ' Apply Button Visible'
          );
     });


     // TC10

     test('TC10 - Loan Approval Validation', async ({ page }) => {

          const loan =
               new LoanRequestPage(page);

          await loan.applyLoan(
               loanData.validLoan
          );

          await loan.verifyLoanApproved();

          console.log(
               ' Loan Approval Verified'
          );
     });


     // TC11

     test('TC11 - Session Persistence Validation', async ({ page }) => {

          const loan =
               new LoanRequestPage(page);

          await loan.gotoLoanRequestPage();

          await loan.refreshPage();

          await loan.verifyLoanPageVisible();

          console.log(
               ' Session Persistence Verified'
          );
     });


     // TC12

     test('TC12 - Unauthorized Access Validation', async ({ page }) => {
          await page.goto('https://parabank.parasoft.com/parabank/logout.htm');
          await page.goto('https://parabank.parasoft.com/parabank/requestloan.htm');
          await expect(page.locator('input[value="Log In"]')).toBeVisible();
          console.log(' Unauthorized Access Blocked');
     });

     test('TC13 - UI Validation', async ({ page }) => {
          const loan =
               new LoanRequestPage(page);

          await loan.gotoLoanRequestPage();

          await expect(
               loan.loanAmountInput
          ).toBeVisible();

          await expect(
               loan.applyButton
          ).toBeVisible();

          console.log(
               ' UI Validation Done'
          );
     });


     // TC14

     test('TC14 - Workflow Validation', async ({ page }) => {

          const loan =
               new LoanRequestPage(page);

          await loan.applyLoan(
               loanData.validLoan
          );

          await loan.verifyLoanApproved();

          console.log(
               ' Workflow Validation Done'
          );
     });


     // TC15

     test('TC15 - Loan Request URL Validation', async ({ page }) => {

          const loan =
               new LoanRequestPage(page);

          await loan.gotoLoanRequestPage();

          await expect(page)
               .toHaveURL(/requestloan.htm/);

          console.log(
               ' Loan Request URL Verified'
          );
     });


     // PARALLEL EXECUTION

     test.describe.configure({
          mode: 'parallel'
     });

});