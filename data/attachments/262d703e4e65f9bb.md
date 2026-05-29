# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: openAccount\openAccount.spec.js >> Open Account Module >> TC05 - Account Number Visibility
- Location: tests\openAccount\openAccount.spec.js:61:9

# Error details

```
Error: expect(locator).not.toHaveText(expected) failed

Locator:  locator('#newAccountId').first()
Expected: not ""
Received: ""
Timeout:  5000ms

Call log:
  - Expect "not toHaveText" with timeout 5000ms
  - waiting for locator('#newAccountId').first()
    14 × locator resolved to <a href="" id="newAccountId"></a>
       - unexpected value ""

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
- heading "Open New Account" [level=1]
- paragraph: What type of Account would you like to open?
- combobox:
  - option "CHECKING"
  - option "SAVINGS" [selected]
- paragraph: A minimum of $100.00 must be deposited into this account at time of opening. Please choose an existing account to transfer funds into the new account.
- combobox:
  - option "19893" [selected]
- button "Open New Account"
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
  3  | class OpenAccountPage {
  4  |      constructor(page) {
  5  |           this.page = page;
  6  |           this.openAccountLink =
  7  |                page.locator('a[href="openaccount.htm"]');
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
  32 |           await this.openAccountLink.click();
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
> 88 |           ).not.toHaveText('');
     |                 ^ Error: expect(locator).not.toHaveText(expected) failed
  89 |      }
  90 | }
  91 | export default OpenAccountPage;
```