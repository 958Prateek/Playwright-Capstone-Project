import { expect } from '@playwright/test';

// POM CLASS
// Find Transactions Module

class FindTransactionsPage {

     constructor(page) {

          this.page = page;
          this.findTransactionsLink =
               page.getByRole(
                    'link', { name: 'Find Transactions' }
               );
          this.amountInput =
               page.locator('#amount');

          this.findByAmountButton =
               page.locator(
                    'button:has-text("Find Transactions")'
               ).nth(2);

          this.dateInput =
               page.locator('#transactionDate');

          this.findByDateButton =
               page.locator(
                    'button:has-text("Find Transactions")'
               ).nth(0);

          this.fromDateInput =
               page.locator('#fromDate');

          this.toDateInput =
               page.locator('#toDate');

          this.findByDateRangeButton =
               page.locator(
                    'button:has-text("Find Transactions")'
               ).nth(1);

          this.transactionIdInput =
               page.locator('#transactionId');

          this.findByIdButton =
               page.locator(
                    'button:has-text("Find Transactions")'
               ).nth(3);

          this.pageTitle =
               page.getByRole('heading', { name: 'Find Transactions' });

          this.resultTable =
               page.locator('#transactionTable');
     }


     // NAVIGATE TO FIND TRANSACTIONS PAGE

     async gotoFindTransactionsPage() {
          await this.findTransactionsLink.click();
     }

     async searchByAmount(amount) {
          await this.gotoFindTransactionsPage();
          await this.amountInput.fill(amount);
          await this.findByAmountButton.click();
     }


     async searchByDate(date) {

          await this.gotoFindTransactionsPage();

          await this.dateInput.fill(date);

          await this.findByDateButton.click();
     }

     async searchByDateRange(fromDate, toDate) {
          await this.gotoFindTransactionsPage();
          await this.fromDateInput.fill(fromDate);
          await this.toDateInput.fill(toDate);
          await this.findByDateRangeButton.click();
     }


     async searchByTransactionId(id) {
          await this.gotoFindTransactionsPage();
          await this.transactionIdInput.fill(id);
          await this.findByIdButton.click();
     }

     async verifyFindTransactionsPageVisible() {
          await expect(this.pageTitle)
               .toContainText(
                    'Find Transactions'
               );
     }

     async verifyResultsVisible() {
          await expect(this.resultTable)
               .toBeVisible();
     }

     // SESSION VALIDATION
     async refreshPage() {

          await this.page.reload();
     }
}
export default FindTransactionsPage;