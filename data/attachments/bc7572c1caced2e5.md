# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: transferFunds\transferFunds.spec.js >> Transfer Funds Module >> TC14 - Page Refresh Validation
- Location: tests\transferFunds\transferFunds.spec.js:131:10

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('heading', { name: 'Transfer Funds' })
Expected substring: "Transfer Funds"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Transfer Funds' })

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome Prateek Chaturvedi
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Error!" [level=1]
- paragraph: An internal error has occurred and has been logged.
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
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
  20 |           await this.amountInput.fill(amount);
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
> 38 |           await expect(this.pageTitle).toContainText('Transfer Funds');
     |                                        ^ Error: expect(locator).toContainText(expected) failed
  39 |      }
  40 | 
  41 |      async refreshPage() {
  42 |           await this.page.reload();
  43 |      }
  44 | }
  45 | export default TransferFundsPage;
```