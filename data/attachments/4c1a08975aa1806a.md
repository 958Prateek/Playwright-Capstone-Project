# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountOverview/accountOverview.spec.js >> Accounts Overview Module >> TC13 - Verify Balance Format
- Location: tests/accountOverview/accountOverview.spec.js:137:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#accountTable')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#accountTable')
    14 × locator resolved to <table id="accountTable" class="gradient-style">…</table>
       - unexpected value "hidden"

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
  1   | import { expect } from '@playwright/test';
  2   | 
  3   | 
  4   | 
  5   | class AccountOverviewPage {
  6   |     constructor(page) {
  7   |         this.page = page;
  8   |         this.accountOverviewLink = page.locator('text=Accounts Overview');
  9   |         this.accountTable = page.locator('#accountTable');
  10  |         this.accountNumbers = page.locator('#accountTable a');
  11  |         this.accountBalances = page.locator('#accountTable tbody tr td').nth(1);
  12  | 
  13  |         this.availableBalances = page.locator('#accountTable tbody tr td:nth-child(3)');
  14  |         this.accountRows = page.locator('#accountTable tbody tr');
  15  |         this.transactionLinks = page.locator('#accountTable a');
  16  |         this.pageTitle = page.getByRole('heading', { name: 'Accounts Overview' });
  17  |         this.logoutLink = page.locator('text=Log Out');
  18  |     }
  19  |     async gotoAccountsOverview() {
  20  |         await this.accountOverviewLink.click();
> 21  |         await expect(this.accountTable).toBeVisible();
      |                                         ^ Error: expect(locator).toBeVisible() failed
  22  |     }
  23  | 
  24  |     async verifyAccountsOverviewPage() {
  25  |         await expect(this.pageTitle)
  26  |             .toContainText(
  27  |                 'Accounts Overview'
  28  |             );
  29  |     }
  30  | 
  31  |     // ASSERTION
  32  |     // VERIFY ACCOUNT TABLE VISIBLE
  33  |     async verifyAccountTableVisible() {
  34  |         await expect(this.accountTable)
  35  |             .toBeVisible();
  36  |     }
  37  | 
  38  |     // ASSERTION
  39  |     // VERIFY ACCOUNT NUMBERS DISPLAYED
  40  |     async verifyAccountNumbersVisible() {
  41  |         await expect(
  42  |             this.accountNumbers.first()
  43  |         ).toBeVisible();
  44  |     }
  45  | 
  46  |     // ASSERTION
  47  |     // VERIFY ACCOUNT BALANCES DISPLAYED
  48  |     async verifyBalancesVisible() {
  49  |         await expect(
  50  |             this.accountBalances.first()
  51  |         ).toBeVisible();
  52  |     }
  53  | 
  54  |     // ASSERTION
  55  |     // VERIFY AVAILABLE BALANCES DISPLAYED
  56  |     async verifyAvailableBalancesVisible() {
  57  |         await expect(
  58  |             this.availableBalances.first()
  59  |         ).toBeVisible();
  60  |     }
  61  | 
  62  |     // ASSERTION
  63  |     // VERIFY MULTIPLE ACCOUNTS PRESENT
  64  |     async verifyMultipleAccounts() {
  65  |         await expect(
  66  |             this.page.locator('body')
  67  |         ).toContainText(
  68  |             'Accounts Overview'
  69  |         );
  70  |     }
  71  | 
  72  | 
  73  |     // ASSERTION
  74  |     // VERIFY TRANSACTION LINKS PRESENT
  75  |     async verifyTransactionLinksVisible() {
  76  |         await expect(
  77  |             this.transactionLinks.first()
  78  |         ).toBeVisible();
  79  |     }
  80  | 
  81  |     // GET FIRST ACCOUNT BALANCE
  82  |     async getFirstAccountBalance() {
  83  |         return await this
  84  |             .accountBalances
  85  |             .first()
  86  |             .textContent();
  87  |     }
  88  | 
  89  | 
  90  |     // GET FIRST ACCOUNT NUMBER
  91  |     async getFirstAccountNumber() {
  92  |         return await this
  93  |             .accountNumbers
  94  |             .first()
  95  |             .textContent();
  96  |     }
  97  | 
  98  |     // CLICK FIRST ACCOUNT
  99  |     async clickFirstAccount() {
  100 |         await this
  101 |             .accountNumbers
  102 |             .first()
  103 |             .click();
  104 |     }
  105 | 
  106 |     // PARAM ASSERTION
  107 |     // VERIFY URL
  108 |     async verifyOverviewURL() {
  109 |         await expect(this.page)
  110 |             .toHaveURL(/overview.htm/);
  111 |     }
  112 | 
  113 | 
  114 |     // SESSION VALIDATION
  115 |     async refreshPage() {
  116 |         await this.page.reload();
  117 |     }
  118 | 
  119 | 
  120 |     // LOGOUT FUNCTION
  121 | 
```