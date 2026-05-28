# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findTransaction\findTransactions.spec.js >> Find Transactions Module >> TC07 - Empty Transaction Search
- Location: tests\findTransaction\findTransactions.spec.js:143:10

# Error details

```
Error: locator.click: Error: strict mode violation: locator('text=Open New Account') resolved to 3 elements:
    1) <a href="openaccount.htm">Open New Account</a> aka getByRole('link', { name: 'Open New Account' })
    2) <h1 class="title">Open New Account</h1> aka getByRole('heading', { name: 'Open New Account' })
    3) <input type="button" class="button" value="Open New Account"/> aka getByRole('button', { name: 'Open New Account' })

Call log:
  - waiting for locator('text=Open New Account')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - heading "Open New Account" [level=1] [ref=e51]
        - generic [ref=e52]:
          - paragraph [ref=e53]: What type of Account would you like to open?
          - combobox [ref=e54]:
            - option "CHECKING"
            - option "SAVINGS" [selected]
          - paragraph [ref=e55]: A minimum of $100.00 must be deposited into this account at time of opening. Please choose an existing account to transfer funds into the new account.
          - combobox [ref=e56]:
            - option "16230" [selected]
          - button "Open New Account" [active] [ref=e58] [cursor=pointer]
  - generic [ref=e60]:
    - list [ref=e61]:
      - listitem [ref=e62]:
        - link "Home" [ref=e63] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "About Us" [ref=e65] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e66]:
        - link "Services" [ref=e67] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Products" [ref=e69] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e70]:
        - link "Locations" [ref=e71] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e72]:
        - link "Forum" [ref=e73] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e74]:
        - link "Site Map" [ref=e75] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e76]:
        - link "Contact Us" [ref=e77] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e78]: © Parasoft. All rights reserved.
    - list [ref=e79]:
      - listitem [ref=e80]: "Visit us at:"
      - listitem [ref=e81]:
        - link "www.parasoft.com" [ref=e82] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | class OpenAccountPage {
  4  |      constructor(page) {
  5  |           this.page = page;
  6  |           this.openAccountLink =
  7  |                page.locator('text=Open New Account');
  8  | 
  9  |           this.accountTypeDropdown =
  10 |                page.locator('#type');
  11 | 
  12 |           this.fromAccountDropdown =
  13 |                page.locator('#fromAccountId');
  14 | 
  15 |           this.openAccountButton =
  16 |                page.locator(
  17 |                     'input[value="Open New Account"]'
  18 |                );
  19 |           this.successMessage =
  20 |                page.locator('#openAccountResult');
  21 | 
  22 |           this.newAccountNumber =
  23 |                page.locator('#newAccountId');
  24 | 
  25 |           this.accountOpenedText =
  26 |                page.getByRole('heading', {
  27 |                     name: 'Account Opened!'
  28 |                });
  29 |      }
  30 | 
  31 |      async gotoOpenAccountPage() {
> 32 |           await this.openAccountLink.click();
     |                                      ^ Error: locator.click: Error: strict mode violation: locator('text=Open New Account') resolved to 3 elements:
  33 |      }
  34 |      async selectAccountType(type) {
  35 |           await this.accountTypeDropdown
  36 |                .selectOption(type);
  37 |      }
  38 | 
  39 |      async clickOpenAccountButton() {
  40 |           await this.openAccountButton.click();
  41 |      }
  42 | 
  43 |      async openNewAccount(type) {
  44 |            await this.gotoOpenAccountPage();
  45 | 
  46 |           // await this.page.goto(
  47 |           //      'https://parabank.parasoft.com/parabank/openaccount.htm'
  48 |           // );
  49 |           // await this.page.waitForLoadState('domcontentloaded');
  50 |           await expect(
  51 |                this.accountTypeDropdown
  52 |           ).toBeVisible();
  53 |           await this.accountTypeDropdown
  54 |                .selectOption(type);
  55 |           await this.page.waitForTimeout(1000);
  56 |           await this.openAccountButton.click();
  57 |           await this.page.waitForLoadState('networkidle');
  58 |           // await this.page.waitForTimeout(2000);
  59 |      }
  60 | 
  61 |      // async openNewAccount(type) {
  62 |      //      await this.page.waitForLoadState(
  63 |      //           'networkidle'
  64 |      //      );
  65 |      //      await this.accountTypeDropdown.selectOption(type);
  66 |      //      await this.page.waitForTimeout(2000);
  67 |      //      await this.openAccountButton.click();
  68 |      //      await this.page.waitForLoadState(
  69 |      //           'networkidle'
  70 |      //      );
  71 |      //      await this.page.waitForTimeout(3000);
  72 |      // }
  73 | 
  74 |      async verifyAccountOpened() {
  75 |           await expect(
  76 |                this.page.locator(
  77 |                     '#openAccountResult'
  78 |                )
  79 |           ).toContainText(
  80 |                'Congratulations'
  81 |           );
  82 |      }
  83 | 
  84 | 
  85 |      async verifyNewAccountNumberVisible() {
  86 |           await expect(
  87 |                this.newAccountNumber.first()
  88 |           ).not.toHaveText('');
  89 |      }
  90 | }
  91 | export default OpenAccountPage;
```