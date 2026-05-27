# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountOverview\accountOverview.spec.js >> Accounts Overview Module >> TC09 - Verify Accounts Overview URL
- Location: tests\accountOverview\accountOverview.spec.js:103:9

# Error details

```
TypeError: Cannot read properties of undefined (reading 'type')
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
        - heading "Welcome user1779709264214" [level=1] [ref=e49]
        - paragraph [ref=e50]: Your account was created successfully. You are now logged in.
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
  4   | import accountOverviewData from '../../test-data/accountOverviewData.json';
  5   | 
  6   | 
  7   | test.describe('Accounts Overview Module', () => {
  8   | 
  9   |     let user;
  10  |     test.beforeEach(async ({ page }) => {
  11  | 
  12  |         // POM OBJECTS
  13  |         const register = new RegisterPage(page);
  14  |         const openAccount = new OpenAccountPage(page);
  15  | 
  16  |         user = {
  17  |            ...accountOverviewData.validUser,
  18  |            username: 'user' + Date.now()
  19  |         };
  20  |         await register.gotoRegisterPage();
  21  |         await register.registerUser(user);
  22  |         await register.verifyRegistration(user.username);  // ASSERTION
> 23  |         await openAccount.openNewAccount(accountOverviewData.savingAccount.type);
      |                                                                            ^ TypeError: Cannot read properties of undefined (reading 'type')
  24  |     });
  25  | 
  26  |     test('TC01 - Verify Accounts Overview Page', async ({ page }) => {
  27  |         const overview = new AccountOverviewPage(page); //pom object
  28  |         await overview.gotoAccountsOverview();
  29  | 
  30  |         // ASSERTION
  31  |         await overview.verifyAccountsOverviewPage();
  32  |         console.log(' Accounts Overview Page Verified');
  33  |     });
  34  | 
  35  | 
  36  |     test('TC02 - Verify Account Balance Visible', async ({ page }) => {
  37  |         const overview = new AccountOverviewPage(page);
  38  |         await overview.gotoAccountsOverview();
  39  |         await overview.verifyBalancesVisible(); // ASSERTION
  40  |         console.log(' Account Balance Visible');
  41  |     });
  42  | 
  43  | 
  44  |     test('TC03 - Verify Account Number Visible', async ({ page }) => {
  45  |         const overview = new AccountOverviewPage(page);
  46  |         await overview.gotoAccountsOverview();
  47  |         await overview.verifyAccountNumbersVisible();
  48  |         console.log(' Account Number Visible');
  49  |     });
  50  | 
  51  | 
  52  |     test('TC04 - Verify Multiple Accounts Display', async ({ page }) => {
  53  |         const overview = new AccountOverviewPage(page);
  54  |         await overview.gotoAccountsOverview();
  55  |         await overview.verifyMultipleAccounts();
  56  |         console.log(' Multiple Accounts Displayed');
  57  |     });
  58  | 
  59  | 
  60  |     test('TC05 - Verify Account Details Navigation', async ({ page }) => {
  61  |         const overview = new AccountOverviewPage(page);
  62  |         await overview.gotoAccountsOverview();
  63  |         await overview.accountNumbers.first().click();
  64  | 
  65  |         // PARAM ASSERTION
  66  |         await expect(page)
  67  |             .toHaveURL(/activity.htm/);
  68  | 
  69  |         console.log(' Account Details Navigation Verified');
  70  |     });
  71  | 
  72  | 
  73  |     test('TC06 - Verify Dynamic Balance Validation', async ({ page }) => {
  74  |         const overview = new AccountOverviewPage(page);
  75  |         await overview.gotoAccountsOverview();
  76  |         const balance =
  77  |             await overview.accountBalances.first()
  78  |                 .textContent();
  79  | 
  80  |         // ASSERTION
  81  | 
  82  |         expect(balance).not.toBeNull();
  83  |         console.log(' Dynamic Balance Validation Done');
  84  |     });
  85  | 
  86  | 
  87  |     test('TC07 - Verify Account Table Visibility', async ({ page }) => {
  88  |         const overview = new AccountOverviewPage(page);
  89  |         await overview.gotoAccountsOverview();
  90  |         await overview.verifyAccountTableVisible();
  91  |         console.log(' Account Table Visible');
  92  |     });
  93  | 
  94  | 
  95  |     test('TC08 - Verify Transaction Link Visibility', async ({ page }) => {
  96  |         const overview = new AccountOverviewPage(page);
  97  |         await overview.gotoAccountsOverview();
  98  |         await overview.verifyTransactionLinksVisible();
  99  |         console.log(' Transaction Links Visible');
  100 |     });
  101 | 
  102 | 
  103 |     test('TC09 - Verify Accounts Overview URL', async ({ page }) => {
  104 |         const overview = new AccountOverviewPage(page);
  105 |         await overview.gotoAccountsOverview();
  106 | 
  107 |         // PARAM ASSERTION
  108 |         await expect(page)
  109 |             .toHaveURL(/overview.htm/);
  110 | 
  111 |         console.log(' Accounts Overview URL Verified');
  112 |     });
  113 | 
  114 | 
  115 |     test('TC10 - Verify Session Persistence', async ({ page }) => {
  116 |         const overview = new AccountOverviewPage(page);
  117 |         await overview.gotoAccountsOverview();
  118 |         await page.reload();
  119 |         await overview.verifyAccountsOverviewPage();
  120 |         console.log(' Session Persistence Verified');
  121 |     });
  122 | 
  123 | 
```