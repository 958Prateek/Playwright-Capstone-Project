# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: transferFunds\transferFunds.spec.js >> Transfer Funds Module >> TC11 - UI Validation
- Location: tests\transferFunds\transferFunds.spec.js:102:10

# Error details

```
Error: locator.click: Error: strict mode violation: locator('text=Transfer Funds') resolved to 2 elements:
    1) <a href="transfer.htm">Transfer Funds</a> aka getByRole('link', { name: 'Transfer Funds' })
    2) <b>A minimum of $100.00 must be deposited into this …</b> aka getByText('A minimum of $100.00 must be')

Call log:
  - waiting for locator('text=Transfer Funds')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome Prateek Chaturvedi
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Account Opened!" [level=1] [ref=e51]
        - paragraph [ref=e52]: Congratulations, your account is now open.
        - paragraph [ref=e53]:
          - text: "Your new account number:"
          - link "46089" [ref=e54] [cursor=pointer]:
            - /url: activity.htm?id=46089
  - generic [ref=e56]:
    - list [ref=e57]:
      - listitem [ref=e58]:
        - link "Home" [ref=e59] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e60]:
        - link "About Us" [ref=e61] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e62]:
        - link "Services" [ref=e63] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "Products" [ref=e65] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e66]:
        - link "Locations" [ref=e67] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e68]:
        - link "Forum" [ref=e69] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e70]:
        - link "Site Map" [ref=e71] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e72]:
        - link "Contact Us" [ref=e73] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e74]: © Parasoft. All rights reserved.
    - list [ref=e75]:
      - listitem [ref=e76]: "Visit us at:"
      - listitem [ref=e77]:
        - link "www.parasoft.com" [ref=e78] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | class TransferFundsPage {
  4  |      constructor(page) {
  5  |           this.page = page ;
  6  |           this.transferFundsLink =page.locator('text=Transfer Funds');
  7  |           this.amountInput = page.locator('#amount');
  8  |           this.fromAccountDropDown =page.locator('#fromAccountId');
  9  |           this.toAccountDropdown =page.locator('#toAccountId');
  10 |           this.transferButton =page.locator('input[value="Transfer"]');
  11 |           this.successMessage =page.locator('#showResult');
  12 |           this.pageTitle = page.locator('h1.title');
  13 | 
  14 |      }
  15 | 
  16 |      async gotoTransferFundsPage() {
> 17 |           await this.transferFundsLink.click();
     |                                        ^ Error: locator.click: Error: strict mode violation: locator('text=Transfer Funds') resolved to 2 elements:
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
  37 |      async verifyTransferPageVisisble() {
  38 |           await expect(this.pageTitle).toContainText('Transfer Funds');
  39 |      }
  40 | 
  41 |      async refreshPage() {
  42 |           await this.page.reload();
  43 |      }
  44 | }
  45 | export default TransferFundsPage;
```