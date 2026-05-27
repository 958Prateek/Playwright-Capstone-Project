import { expect } from '@playwright/test';

class TransferFundsPage {
     constructor(page) {
          this.page = page;
          this.transferFundsLink = page.getByRole('link', { name: 'Transfer Funds' });
          this.amountInput = page.locator('#amount');
          this.fromAccountDropdown = page.locator('#fromAccountId');
          this.toAccountDropdown = page.locator('#toAccountId');
          this.transferButton = page.locator('input[value="Transfer"]');
          this.successMessage = page.locator('#showResult');
          this.pageTitle = page.getByRole('heading', { name: 'Transfer Funds' });

     }

     async gotoTransferFundsPage() {
          await this.transferFundsLink.click();
     }
     async enterAmount(amount) {
          await this.amountInput.fill(amount);
     }

     async clickTransferButton() {
          await this.transferButton.click();
     }

     async transferFunds(amount) {
          await this.gotoTransferFundsPage();
          await this.enterAmount(amount);
          await this.clickTransferButton();
     }

     async verifyTransferSuccess() {
          await expect(this.successMessage).toContainText('Transfer Complete!');
     }

     async verifyTransferPageVisible() {
          await expect(this.pageTitle).toContainText('Transfer Funds');
     }

     async refreshPage() {
          await this.page.reload();
     }
}
export default TransferFundsPage;