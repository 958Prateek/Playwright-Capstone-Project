# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountOverview\accountOverview.spec.js >> Accounts Overview Module >> TC15 - Verify Account Overview Workflow
- Location: tests\accountOverview\accountOverview.spec.js:175:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1.title').first()
Expected substring: "Accounts Overview"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h1.title').first()

```

```yaml
- banner:
  - heading "Error 1015" [level=1]
  - text: "Ray ID: a0145fd6dbe2d2d2 • 2026-05-25 11:59:30 UTC"
  - heading "You are being rate limited" [level=2]
- heading "What happened?" [level=2]
- paragraph: The owner of this website (parabank.parasoft.com) has banned you temporarily from accessing this website.
- paragraph:
  - text: Please see
  - link "https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/":
    - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/
  - text: for more details.
- text: Was this page helpful?
- button "Yes"
- button "No"
- paragraph:
  - text: "Cloudflare Ray ID:"
  - strong: a0145fd6dbe2d2d2
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing
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
  11  |         this.accountBalances = page.locator(
  12  |                 '#accountTable tbody tr td:nth-child(2)'
  13  |             );
  14  | 
  15  |         this.availableBalances = page.locator( '#accountTable tbody tr td:nth-child(3)');
  16  |         this.accountRows = page.locator('#accountTable tbody tr');
  17  |         this.transactionLinks = page.locator('#accountTable a');
  18  |         this.pageTitle = page.locator('h1.title').first();
  19  |         this.logoutLink = page.locator('text=Log Out');
  20  |     }
  21  |     async gotoAccountsOverview() {
  22  |         await this.accountOverviewLink.click();
  23  |     }
  24  | 
  25  |     async verifyAccountsOverviewPage() {
  26  |         await expect(this.pageTitle)
> 27  |             .toContainText(
      |              ^ Error: expect(locator).toContainText(expected) failed
  28  |                 'Accounts Overview'
  29  |             );
  30  |     }
  31  | 
  32  |     // ASSERTION
  33  |     // VERIFY ACCOUNT TABLE VISIBLE
  34  |     async verifyAccountTableVisible() {
  35  |         await expect(this.accountTable)
  36  |             .toBeVisible();
  37  |     }
  38  | 
  39  |     // ASSERTION
  40  |     // VERIFY ACCOUNT NUMBERS DISPLAYED
  41  |     async verifyAccountNumbersVisible() {
  42  |         await expect(
  43  |             this.accountNumbers.first()
  44  |         ).toBeVisible();
  45  |     }
  46  | 
  47  |     // ASSERTION
  48  |     // VERIFY ACCOUNT BALANCES DISPLAYED
  49  |     async verifyBalancesVisible() {
  50  |         await expect(
  51  |             this.accountBalances.first()
  52  |         ).toBeVisible();
  53  |     }
  54  | 
  55  |     // ASSERTION
  56  |     // VERIFY AVAILABLE BALANCES DISPLAYED
  57  |     async verifyAvailableBalancesVisible() {
  58  |         await expect(
  59  |             this.availableBalances.first()
  60  |         ).toBeVisible();
  61  |     }
  62  | 
  63  |     // ASSERTION
  64  |     // VERIFY MULTIPLE ACCOUNTS PRESENT
  65  |     async verifyMultipleAccounts() {
  66  |           await expect(
  67  |                this.page.locator('body')
  68  |           ).toContainText(
  69  |                'Accounts Overview'
  70  |           );
  71  |      }
  72  | 
  73  | 
  74  |     // ASSERTION
  75  |     // VERIFY TRANSACTION LINKS PRESENT
  76  |     async verifyTransactionLinksVisible() {
  77  |         await expect(
  78  |             this.transactionLinks.first()
  79  |         ).toBeVisible();
  80  |     }
  81  | 
  82  |     // GET FIRST ACCOUNT BALANCE
  83  |     async getFirstAccountBalance() {
  84  |         return await this
  85  |             .accountBalances
  86  |             .first()
  87  |             .textContent();
  88  |     }
  89  | 
  90  | 
  91  |     // GET FIRST ACCOUNT NUMBER
  92  |     async getFirstAccountNumber() {
  93  |         return await this
  94  |             .accountNumbers
  95  |             .first()
  96  |             .textContent();
  97  |     }
  98  | 
  99  |     // CLICK FIRST ACCOUNT
  100 |     async clickFirstAccount() {
  101 |         await this
  102 |             .accountNumbers
  103 |             .first()
  104 |             .click();
  105 |     }
  106 | 
  107 |     // PARAM ASSERTION
  108 |     // VERIFY URL
  109 |     async verifyOverviewURL() {
  110 |         await expect(this.page)
  111 |             .toHaveURL(/overview.htm/);
  112 |     }
  113 | 
  114 | 
  115 |     // SESSION VALIDATION
  116 |     async refreshPage() {
  117 |         await this.page.reload();
  118 |     }
  119 | 
  120 | 
  121 |     // LOGOUT FUNCTION
  122 | 
  123 |     async logout() {
  124 |         await this.logoutLink.click();
  125 |     }
  126 | }
  127 | export default AccountOverviewPage;
```