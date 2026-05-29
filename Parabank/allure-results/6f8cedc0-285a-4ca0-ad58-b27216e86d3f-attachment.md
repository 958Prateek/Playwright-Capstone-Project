# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findTransaction\findTransactions.spec.js >> Find Transactions Module >> TC02 - Invalid Transaction ID
- Location: tests\findTransaction\findTransactions.spec.js:43:10

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#amount')

```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | class TransferFundsPage {
  4  |      constructor(page) {
  5  |           this.page = page;
  6  |           this.transferFundsLink = page.getByRole('link', { name: 'Transfer Funds' });
  7  |           this.amountInput = page.locator('#amount');
  8  |           this.fromAccountDropdown = page.locator('#fromAccountId');
  9  |           this.toAccountDropdown = page.locator('#toAccountId');
  10 |           this.transferButton = page.locator('input[value="Transfer"]');
  11 |           this.successMessage = page.locator('#showResult');
  12 |           this.pageTitle = page.getByRole('heading', { name: 'Transfer Funds' });
  13 | 
  14 |      }
  15 | 
  16 |      async gotoTransferFundsPage() {
  17 |           await this.transferFundsLink.click();
  18 |      }
  19 |      async enterAmount(amount) {
> 20 |           await this.amountInput.fill(amount);
     |                                  ^ Error: locator.fill: Test ended.
  21 |      }
  22 | 
  23 |      async clickTransferButton() {
  24 |           await this.transferButton.click();
  25 |      }
  26 | 
  27 |      async transferFunds(amount) {
  28 |           await this.gotoTransferFundsPage();
  29 |           await this.enterAmount(amount);
  30 |           await this.clickTransferButton();
  31 |      }
  32 | 
  33 |      async verifyTransferSuccess() {
  34 |           await expect(this.successMessage).toContainText('Transfer Complete!');
  35 |      }
  36 | 
  37 |      async verifyTransferPageVisible() {
  38 |           await expect(this.pageTitle).toContainText('Transfer Funds');
  39 |      }
  40 | 
  41 |      async refreshPage() {
  42 |           await this.page.reload();
  43 |      }
  44 | }
  45 | export default TransferFundsPage;
```