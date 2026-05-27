import { expect } from '@playwright/test';

class LoanRequestPage {
     constructor(page) {
          this.page = page;
          this.loanRequestLink = page.locator('text=Request Loan');
          this.loanAmountInput = page.locator('#amount');
          this.downPaymentInput = page.locator('#downPayment');
          this.applyButton = page.locator('input[value="Apply Now"]');
          this.successMessage = page.locator('#loanRequestApproved');
          this.pageTitle = page.getByRole('heading', { name: 'Apply for a Loan' });
     }

     async gotoLoanRequestPage() {
          await this.loanRequestLink.click();
     }

     async applyLoan(data) {
          await this.gotoLoanRequestPage();
          await this.loanAmountInput.fill(data.loanAmount);
          await this.downPaymentInput.fill(
               data.downPayment
          );
          await this.applyButton.click();
     }

     async verifyLoanPageVisible() {
          await expect(this.pageTitle).toContainText('Apply for a Loan');
     }
     async verifyLoanApproved() {
          await expect(
               this.page.locator('body')
          ).toContainText(
               'Loan Request Processed'
          );
     }
     // SESSION VALIDATION
     async refreshPage() {
          await this.page.reload();
     }
}
export default LoanRequestPage;