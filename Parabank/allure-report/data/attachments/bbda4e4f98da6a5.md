# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: transferFunds\transferFunds.spec.js >> Transfer Funds Module >> TC01 - Valid Fund Transfer
- Location: tests\transferFunds\transferFunds.spec.js:27:10

# Error details

```
TypeError: transfer.verifyTranferSuccess is not a function
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
        - heading "Transfer Funds" [level=1] [ref=e51]
        - generic [ref=e52]:
          - paragraph [ref=e53]:
            - text: "Amount: $"
            - textbox [ref=e54]: "10500"
          - generic [ref=e55]:
            - text: "From account #"
            - combobox [ref=e56]
            - text: "to account #"
            - combobox [ref=e57]
          - button "Transfer" [active] [ref=e59] [cursor=pointer]
  - generic [ref=e61]:
    - list [ref=e62]:
      - listitem [ref=e63]:
        - link "Home" [ref=e64] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e65]:
        - link "About Us" [ref=e66] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e67]:
        - link "Services" [ref=e68] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e69]:
        - link "Products" [ref=e70] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e71]:
        - link "Locations" [ref=e72] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e73]:
        - link "Forum" [ref=e74] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e75]:
        - link "Site Map" [ref=e76] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e77]:
        - link "Contact Us" [ref=e78] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e79]: © Parasoft. All rights reserved.
    - list [ref=e80]:
      - listitem [ref=e81]: "Visit us at:"
      - listitem [ref=e82]:
        - link "www.parasoft.com" [ref=e83] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import RegisterPage from '../../POM/RegisterPage';
  3   | import OpenAccountPage from '../../POM/OpenAccountPage';
  4   | import TransferFundsPage from '../../POM/TransferFundsPage';
  5   | import transferData from '../../test-data/transferFundsData.json';
  6   | import registerData from '../../test-data/registerData.json';
  7   | 
  8   | let user;
  9   | 
  10  | test.describe('Transfer Funds Module', () => {
  11  |      let users;
  12  |      test.beforeEach(async ({ page }) => {
  13  |           const register = new RegisterPage(page);
  14  |           const openAccount = new OpenAccountPage(page);
  15  |           user = {
  16  |                ...registerData.validUser,
  17  |                username: 'user_' + Date.now()
  18  |           };
  19  | 
  20  |           await register.gotoRegisterPage();
  21  |           await register.registerUser(user);
  22  |           await register.verifyRegistration(user.username);
  23  |           await openAccount.openNewAccount('1');
  24  |           await openAccount.openNewAccount('0');
  25  |      });
  26  | 
  27  |      test('TC01 - Valid Fund Transfer', async ({ page }) => {
  28  |           const transfer =
  29  |                new TransferFundsPage(page);
  30  |           await transfer.transferFunds(transferData.validTransfer.amount);
> 31  |           await transfer.verifyTranferSuccess();
      |                          ^ TypeError: transfer.verifyTranferSuccess is not a function
  32  |           console.log('Valid Fund Transfer Successful');
  33  |      });
  34  | 
  35  |      test('TC02 - Decimal Amount Transfer', async ({ page }) => {
  36  |           const transfer = new TransferFundsPage(page);
  37  |           await transfer.transferFunds(transferData.decimalTransfer.amount);
  38  |           await transfer.verifyTransferSuccess();
  39  |           console.log('Decimal Amount Transfer');
  40  |      });
  41  | 
  42  |      test('TC03 - Transfer Page Visibility', async ({ page }) => {
  43  |           const transfer = new TransferFundsPage(page);
  44  |           await transfer.gotoTransferFundsPage();
  45  |           await transfer.verifyTransferPageVisible();
  46  |           console.log(' Transfer Page Visible');
  47  |      });
  48  | 
  49  |      test('TC04 - Transfer Page Visibility', async ({ page }) => {
  50  |           const transfer = new TransferFundsPage(page);
  51  |           await transfer.gotoTransferFundsPage();
  52  |           await expect(transfer.transferButton).toBeVisible();
  53  |           console.log('Transfer Button Visible');
  54  |      });
  55  | 
  56  |      test('TC05 - Amount Field Visible', async ({ page }) => {
  57  |           const transfer = new TransferFundsPage(page);
  58  |           await transfer.gotoTransferFundsPage();
  59  |           await expect(transfer.amountInput).toBeVisible();
  60  |           console.log('Amount Field Visisble');
  61  |      });
  62  | 
  63  |      test('TC06 - From Account ', async ({ page }) => {
  64  |           const transfer = new TransferFundsPage(page);
  65  |           await transfer.gotoTransferFundsPage();
  66  |           await expect(transfer.fromAccountDropdown).toBeVisible();
  67  |           console.log(' From Account Dropdown Visible');
  68  |      });
  69  | 
  70  | 
  71  |      test('TC07 - To Account ', async ({ page }) => {
  72  |           const transfer = new TransferFundsPage(page);
  73  |           await transfer.gotoTransferFundsPage();
  74  |           await expect(transfer.toAccountDropdown).toBeVisible();
  75  |           console.log(' To Account Dropdown Visible');
  76  |      });
  77  | 
  78  | 
  79  |      test('TC08 - Transfer Confirmation Validation', async ({ page }) => {
  80  |           const transfer = new TransferFundsPage(page);
  81  |           await transfer.transferFunds(transferData.validTransfer.amount);
  82  |           await transfer.verifyTransferSuccess();
  83  |           console.log('Transfer Confirmation Verified');
  84  |      });
  85  | 
  86  | 
  87  |      test('TC09 - Session Persistence Validation', async ({ page }) => {
  88  |           const transfer = new TransferFundsPage(page);
  89  |           await transfer.gotoTransferFundsPage();
  90  |           await transfer.refreshPage(); //session validation
  91  |           await transfer.verifyTransferPageVisible();
  92  |           console.log(' Session Persistence Verified');
  93  |      });
  94  | 
  95  | 
  96  |      test('TC10 - Unauthorized Access Validation', async ({ page }) => {
  97  |           await page.goto('https://parabank.parasoft.com/parabank/logout.htm');
  98  |           await page.goto('https://parabank.parasoft.com/parabank/transfer.htm');
  99  |           await expect(page.locator('input[value="Log In"]')).toBeVisible();
  100 |           console.log('Unauthorized Access Blocked');
  101 |      });
  102 | 
  103 | 
  104 |      test('TC11 - UI Validation', async ({ page }) => {
  105 |           const transfer = new TransferFundsPage(page);
  106 |           await transfer.gotoTransferFundsPage();
  107 |           await expect(transfer.amountInput).toBeVisible();
  108 |           await expect(transfer.transferButton).toBeVisible();
  109 |           console.log(' UI Validation Done');
  110 |      });
  111 | 
  112 | 
  113 |      test('TC12 - Transfer Workflow ', async ({ page }) => {
  114 |           const transfer = new TransferFundsPage(page);
  115 |           await transfer.gotoTransferFundsPage();
  116 |           await transfer.enterAmount(transferData.validTransfer.amount);
  117 |           await transfer.clickTransferButton();
  118 |           await transfer.verifyTransferSuccess();
  119 |           console.log('Transfer Workflow validation Done');
  120 |      });
  121 | 
  122 | 
  123 |      test('TC13 - Transfer Page URL Validation', async ({ page }) => {
  124 |           const transfer = new TransferFundsPage(page);
  125 |           await transfer.gotoTransferFundsPage();
  126 |           await expect(page).toHaveURL(/transfer.htm/);
  127 |           console.log('Transfer Page URL Verified');
  128 |      });
  129 | 
  130 | 
  131 |      test('TC14 - Page Refresh Validation', async ({ page }) => {
```