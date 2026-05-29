# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountOverview\accountOverview.spec.js >> Accounts Overview Module >> TC07 - Verify Account Table Visibility
- Location: tests\accountOverview\accountOverview.spec.js:88:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#accountTable')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#accountTable')

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
  13  |         this.availableBalances = page.locator( '#accountTable tbody tr td:nth-child(3)');
  14  |         this.accountRows = page.locator('#accountTable tbody tr');
  15  |         this.transactionLinks = page.locator('#accountTable a');
  16  |         this.pageTitle = page.getByRole ('heading',{name: 'Accounts Overview'});
  17  |         this.logoutLink = page.locator('text=Log Out');
  18  |     }
  19  |     async gotoAccountsOverview() {
  20  |         await this.accountOverviewLink.click();
  21  |     }
  22  | 
  23  |     async verifyAccountsOverviewPage() {
  24  |         await expect(this.pageTitle)
  25  |             .toContainText(
  26  |                 'Accounts Overview'
  27  |             );
  28  |     }
  29  | 
  30  |     // ASSERTION
  31  |     // VERIFY ACCOUNT TABLE VISIBLE
  32  |     async verifyAccountTableVisible() {
  33  |         await expect(this.accountTable)
> 34  |             .toBeVisible();
      |              ^ Error: expect(locator).toBeVisible() failed
  35  |     }
  36  | 
  37  |     // ASSERTION
  38  |     // VERIFY ACCOUNT NUMBERS DISPLAYED
  39  |     async verifyAccountNumbersVisible() {
  40  |         await expect(
  41  |             this.accountNumbers.first()
  42  |         ).toBeVisible();
  43  |     }
  44  | 
  45  |     // ASSERTION
  46  |     // VERIFY ACCOUNT BALANCES DISPLAYED
  47  |     async verifyBalancesVisible() {
  48  |         await expect(
  49  |             this.accountBalances.first()
  50  |         ).toBeVisible();
  51  |     }
  52  | 
  53  |     // ASSERTION
  54  |     // VERIFY AVAILABLE BALANCES DISPLAYED
  55  |     async verifyAvailableBalancesVisible() {
  56  |         await expect(
  57  |             this.availableBalances.first()
  58  |         ).toBeVisible();
  59  |     }
  60  | 
  61  |     // ASSERTION
  62  |     // VERIFY MULTIPLE ACCOUNTS PRESENT
  63  |     async verifyMultipleAccounts() {
  64  |           await expect(
  65  |                this.page.locator('body')
  66  |           ).toContainText(
  67  |                'Accounts Overview'
  68  |           );
  69  |      }
  70  | 
  71  | 
  72  |     // ASSERTION
  73  |     // VERIFY TRANSACTION LINKS PRESENT
  74  |     async verifyTransactionLinksVisible() {
  75  |         await expect(
  76  |             this.transactionLinks.first()
  77  |         ).toBeVisible();
  78  |     }
  79  | 
  80  |     // GET FIRST ACCOUNT BALANCE
  81  |     async getFirstAccountBalance() {
  82  |         return await this
  83  |             .accountBalances
  84  |             .first()
  85  |             .textContent();
  86  |     }
  87  | 
  88  | 
  89  |     // GET FIRST ACCOUNT NUMBER
  90  |     async getFirstAccountNumber() {
  91  |         return await this
  92  |             .accountNumbers
  93  |             .first()
  94  |             .textContent();
  95  |     }
  96  | 
  97  |     // CLICK FIRST ACCOUNT
  98  |     async clickFirstAccount() {
  99  |         await this
  100 |             .accountNumbers
  101 |             .first()
  102 |             .click();
  103 |     }
  104 | 
  105 |     // PARAM ASSERTION
  106 |     // VERIFY URL
  107 |     async verifyOverviewURL() {
  108 |         await expect(this.page)
  109 |             .toHaveURL(/overview.htm/);
  110 |     }
  111 | 
  112 | 
  113 |     // SESSION VALIDATION
  114 |     async refreshPage() {
  115 |         await this.page.reload();
  116 |     }
  117 | 
  118 | 
  119 |     // LOGOUT FUNCTION
  120 | 
  121 |     async logout() {
  122 |         await this.logoutLink.click();
  123 |     }
  124 | }
  125 | export default AccountOverviewPage;
```