# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountOverview\accountOverview.spec.js >> Accounts Overview Module >> TC06 - Verify Dynamic Balance Validation
- Location: tests\accountOverview\accountOverview.spec.js:74:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#accountTable tbody tr td').nth(1).first()

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
      - generic [ref=e48]:
        - heading "Error!" [level=1] [ref=e49]
        - paragraph [ref=e50]: An internal error has occurred and has been logged.
  - generic [ref=e52]:
    - list [ref=e53]:
      - listitem [ref=e54]:
        - link "Home" [ref=e55] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e56]:
        - link "About Us" [ref=e57] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e58]:
        - link "Services" [ref=e59] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e60]:
        - link "Products" [ref=e61] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e62]:
        - link "Locations" [ref=e63] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e64]:
        - link "Forum" [ref=e65] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e66]:
        - link "Site Map" [ref=e67] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Contact Us" [ref=e69] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e70]: © Parasoft. All rights reserved.
    - list [ref=e71]:
      - listitem [ref=e72]: "Visit us at:"
      - listitem [ref=e73]:
        - link "www.parasoft.com" [ref=e74] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import RegisterPage from '../../POM/RegisterPage';
  3   | import OpenAccountPage from '../../POM/OpenAccountPage';
  4   | import AccountOverviewPage from '../../POM/AccountOverviewPage';
  5   | import accountOverviewData from '../../test-data/accountOverviewData.json';
  6   | 
  7   | 
  8   | test.describe('Accounts Overview Module', () => {
  9   | 
  10  |     let user;
  11  |     test.beforeEach(async ({ page }) => {
  12  | 
  13  |         // POM OBJECTS
  14  |         const register = new RegisterPage(page);
  15  |         const openAccount = new OpenAccountPage(page);
  16  | 
  17  |         user = {
  18  |            ...accountOverviewData.validUser,
  19  |            username: 'user_' + Math.random().toString(36).substring(2,10)
  20  |         };
  21  |         await register.gotoRegisterPage();
  22  |         await register.registerUser(user);
  23  |         await register.verifyRegistration(user.username);  // ASSERTION
  24  |         await openAccount.openNewAccount(accountOverviewData.savingsAccount.type);
  25  |     });
  26  | 
  27  |     test('TC01 - Verify Accounts Overview Page', async ({ page }) => {
  28  |         const overview = new AccountOverviewPage(page); //pom object
  29  |         await overview.gotoAccountsOverview();
  30  | 
  31  |         // ASSERTION
  32  |         await overview.verifyAccountsOverviewPage();
  33  |         console.log(' Accounts Overview Page Verified');
  34  |     });
  35  | 
  36  | 
  37  |     test('TC02 - Verify Account Balance Visible', async ({ page }) => {
  38  |         const overview = new AccountOverviewPage(page);
  39  |         await overview.gotoAccountsOverview();
  40  |         await overview.verifyBalancesVisible(); // ASSERTION
  41  |         console.log(' Account Balance Visible');
  42  |     });
  43  | 
  44  | 
  45  |     test('TC03 - Verify Account Number Visible', async ({ page }) => {
  46  |         const overview = new AccountOverviewPage(page);
  47  |         await overview.gotoAccountsOverview();
  48  |         await overview.verifyAccountNumbersVisible();
  49  |         console.log(' Account Number Visible');
  50  |     });
  51  | 
  52  | 
  53  |     test('TC04 - Verify Multiple Accounts Display', async ({ page }) => {
  54  |         const overview = new AccountOverviewPage(page);
  55  |         await overview.gotoAccountsOverview();
  56  |         await overview.verifyMultipleAccounts();
  57  |         console.log(' Multiple Accounts Displayed');
  58  |     });
  59  | 
  60  | 
  61  |     test('TC05 - Verify Account Details Navigation', async ({ page }) => {
  62  |         const overview = new AccountOverviewPage(page);
  63  |         await overview.gotoAccountsOverview();
  64  |         await overview.accountNumbers.first().click();
  65  | 
  66  |         // PARAM ASSERTION
  67  |         await expect(page)
  68  |             .toHaveURL(/activity.htm/);
  69  | 
  70  |         console.log(' Account Details Navigation Verified');
  71  |     });
  72  | 
  73  | 
  74  |     test('TC06 - Verify Dynamic Balance Validation', async ({ page }) => {
  75  |         const overview = new AccountOverviewPage(page);
  76  |         await overview.gotoAccountsOverview();
  77  |         const balance =
  78  |             await overview.accountBalances.first()
> 79  |                 .textContent();
      |                  ^ Error: locator.textContent: Test timeout of 60000ms exceeded.
  80  | 
  81  |         // ASSERTION
  82  | 
  83  |         expect(balance).not.toBeNull();
  84  |         console.log(' Dynamic Balance Validation Done');
  85  |     });
  86  | 
  87  | 
  88  |     test('TC07 - Verify Account Table Visibility', async ({ page }) => {
  89  |         const overview = new AccountOverviewPage(page);
  90  |         await overview.gotoAccountsOverview();
  91  |         await overview.verifyAccountTableVisible();
  92  |         console.log(' Account Table Visible');
  93  |     });
  94  | 
  95  | 
  96  |     test('TC08 - Verify Transaction Link Visibility', async ({ page }) => {
  97  |         const overview = new AccountOverviewPage(page);
  98  |         await overview.gotoAccountsOverview();
  99  |         await overview.verifyTransactionLinksVisible();
  100 |         console.log(' Transaction Links Visible');
  101 |     });
  102 | 
  103 | 
  104 |     test('TC09 - Verify Accounts Overview URL', async ({ page }) => {
  105 |         const overview = new AccountOverviewPage(page);
  106 |         await overview.gotoAccountsOverview();
  107 | 
  108 |         // PARAM ASSERTION
  109 |         await expect(page)
  110 |             .toHaveURL(/overview.htm/);
  111 | 
  112 |         console.log(' Accounts Overview URL Verified');
  113 |     });
  114 | 
  115 | 
  116 |     test('TC10 - Verify Session Persistence', async ({ page }) => {
  117 |         const overview = new AccountOverviewPage(page);
  118 |         await overview.gotoAccountsOverview();
  119 |         await page.reload();
  120 |         await overview.verifyAccountsOverviewPage();
  121 |         console.log(' Session Persistence Verified');
  122 |     });
  123 | 
  124 | 
  125 |     test('TC11 - Verify Unauthorized Access', async ({ page }) => {
  126 |         await page.goto(
  127 |             'https://parabank.parasoft.com/parabank/overview.htm'
  128 |         );
  129 |         await expect(page.locator('body')
  130 |      ).toContainText(
  131 |           'Accounts Overview'
  132 |      );
  133 |         console.log(' Unauthorized Access Blocked');
  134 |     });
  135 | 
  136 | 
  137 |     test('TC12 - Verify Account Synchronization', async ({ page }) => {
  138 |         const overview =new AccountOverviewPage(page);
  139 |         await overview.gotoAccountsOverview();
  140 |         await overview.verifyMultipleAccounts();
  141 |         console.log(' Account Synchronization Verified');
  142 |     });
  143 | 
  144 | 
  145 |     test('TC13 - Verify Balance Format', async ({ page }) => {
  146 |         const overview = new AccountOverviewPage(page);
  147 |         await overview.gotoAccountsOverview();
  148 |         const balance =
  149 |             await overview.accountBalances.first()
  150 |                 .textContent();
  151 | 
  152 |         // ASSERTION
  153 |         expect(balance).toContain('$');
  154 |         console.log(' Balance Format Verified');
  155 |     });
  156 | 
  157 | 
  158 |     test('TC14 - Verify UI Elements', async ({ page }) => {
  159 |         const overview = new AccountOverviewPage(page);
  160 |         await overview.gotoAccountsOverview();
  161 | 
  162 |         // ASSERTIONS
  163 |         await expect(
  164 |             overview.pageTitle
  165 |         ).toBeVisible();
  166 | 
  167 |         await expect(
  168 |             overview.accountTable
  169 |         ).toBeVisible();
  170 | 
  171 |         console.log('UI Validation Done');
  172 |     });
  173 | 
  174 | 
  175 |     test('TC15 - Verify Account Overview Workflow', async ({ page }) => {
  176 |         const overview = new AccountOverviewPage(page);
  177 |         await overview.gotoAccountsOverview();
  178 |         await overview.verifyAccountsOverviewPage();
  179 |         await overview.verifyBalancesVisible();
```