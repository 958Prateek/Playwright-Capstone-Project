# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: transferFunds\transferFunds.spec.js >> Transfer Funds Module >> TC03 - Transfer Page Visibility
- Location: tests\transferFunds\transferFunds.spec.js:41:10

# Error details

```
TypeError: transfer.verifyTransferPageVisible is not a function
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
        - heading "Transfer Funds" [level=1] [ref=e51]
        - generic [ref=e52]:
          - paragraph [ref=e53]:
            - text: "Amount: $"
            - textbox [ref=e54]
          - generic [ref=e55]:
            - text: "From account #"
            - combobox [ref=e56]
            - text: "to account #"
            - combobox [ref=e57]
          - button "Transfer" [ref=e59] [cursor=pointer]
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
  28  |           const transfer = newTransferFundsPage(page);
  29  |           await transfer.transferFunds(transferData.validTransfer.amount);
  30  |           await transfer.verifyTranferSuccess();
  31  |           console.log('Valid Fund Transfer Successful');
  32  |      });
  33  | 
  34  |      test('TC02 - Decimal Amount Transfer', async ({ page }) => {
  35  |           const transfer = new TransferFundsPage(page);
  36  |           await transfer.transferFunds(transferData.decimalTransfer.amount);
  37  |           await transfer.verifyTrasnferSuccess();
  38  |           console.log('Decimal Amount Transfer');
  39  |      });
  40  | 
  41  |      test('TC03 - Transfer Page Visibility', async ({ page }) => {
  42  |           const transfer = new TransferFundsPage(page);
  43  |           await transfer.gotoTransferFundsPage();
> 44  |           await transfer.verifyTransferPageVisible();
      |                          ^ TypeError: transfer.verifyTransferPageVisible is not a function
  45  |           console.log(' Transfer Page Visible');
  46  |      });
  47  | 
  48  |      test('TC04 - Transfer Page Visibility', async ({ page }) => {
  49  |           const transfer = new TransferFundsPage(page);
  50  |           await transfer.gotoTransferFundsPage();
  51  |           await expect(transfer.transferButton).toBeVisible();
  52  |           console.log('Transfer Button Visible');
  53  |      });
  54  | 
  55  |      test('TC05 - Amount Field Visible', async ({ page }) => {
  56  |           const transfer = new TransferFundsPage(page);
  57  |           await transfer.gotoTransferFundsPage();
  58  |           await expect(transfer.amountInput).toBeVisible();
  59  |           console.log('Amount Field Visisble');
  60  |      });
  61  | 
  62  |      test('TC06 - From Account ', async ({ page }) => {
  63  |           const transfer = new TransferFundsPage(page);
  64  |           await transfer.gotoTransferFundsPage();
  65  |           await expect(transfer.fromAccountDropdown).toBeVisible();
  66  |           console.log(' From Account Dropdown Visible');
  67  |      });
  68  | 
  69  | 
  70  |      test('TC07 - To Account ', async ({ page }) => {
  71  |           const transfer = new TransferFundsPage(page);
  72  |           await transfer.gotoTransferFundsPage();
  73  |           await expect(transfer.toAccountDropdown).toBeVisible();
  74  |           console.log(' To Account Dropdown Visible');
  75  |      });
  76  | 
  77  | 
  78  |      test('TC08 - Transfer Confirmation Validation', async ({ page }) => {
  79  |           const transfer = new TransferFundsPage(page);
  80  |           await transfer.transferFunds(transferData.validTransfer.amount);
  81  |           await transfer.verifyTransferSuccess();
  82  |           console.log('Transfer Confirmation Verified');
  83  |      });
  84  | 
  85  | 
  86  |      test('TC09 - Session Persistence Validation', async ({ page }) => {
  87  |           const transfer = new TransferFundsPage(page);
  88  |           await transfer.gotoTransferFundsPage();
  89  |           await transfer.refreshPage(); //session validation
  90  |           await transfer.verifyTransferPageVisible();
  91  |           console.log(' Session Persistence Verified');
  92  |      });
  93  | 
  94  | 
  95  |      test('TC10 - Unauthorized Access Validation', async ({ page }) => {
  96  |           await page.goto('https://parabank.parasoft.com/parabank/logout.htm');
  97  |           await page.goto('https://parabank.parasoft.com/parabank/transfer.htm');
  98  |           await expect(page.locator('input[value="Log In"]')).toBeVisible();
  99  |           console.log('Unauthorized Access Blocked');
  100 |      });
  101 | 
  102 | 
  103 |      test('TC11 - UI Validation', async ({ page }) => {
  104 |           const transfer = new TransferFundsPage(page);
  105 |           await transfer.gotoTransferFundsPage();
  106 |           await expect(transfer.amountInput).toBeVisible();
  107 |           await expect(transfer.transferButton).toBeVisible();
  108 |           console.log(' UI Validation Done');
  109 |      });
  110 | 
  111 | 
  112 |      test('TC12 - Transfer Workflow ', async ({ page }) => {
  113 |           const transfer = new TransferFundsPage(page);
  114 |           await transfer.gotoTransferFundsPage();
  115 |           await transfer.enterAmount(transferData.validTransfer.amount);
  116 |           await transfer.clickTransferButton();
  117 |           await transfer.verifyTransferSuccess();
  118 |           console.log('Transfer Workflow validation Done');
  119 |      });
  120 | 
  121 | 
  122 |      test('TC13 - Transfer Page URL Validation', async ({ page }) => {
  123 |           const transfer = new TransferFundsPage(page);
  124 |           await transfer.gotoTransferFundsPage();
  125 |           await expect(page).toHaveURL(/transfer.htm/);
  126 |           console.log('Transfer Page URL Verified');
  127 |      });
  128 | 
  129 | 
  130 |      test('TC14 - Page Refresh Validation', async ({ page }) => {
  131 |           const transfer = new TransferFundsPage(page);
  132 |           await transfer.gotoTransferFundsPage();
  133 |           await page.reload();
  134 |           await transfer.verifyTransferPageVisible();
  135 |           console.log(' Page Refresh Validation Done');
  136 |      });
  137 | 
  138 | 
  139 |      test('TC15 - Multiple Transfer Execution', async ({ page }) => {
  140 |           const transfer = new TransferFundsPage(page);
  141 |           await transfer.transferFunds('50');
  142 |           await transfer.verifyTransferSuccess();
  143 |           await transfer.transferFunds('25');
  144 |           await transfer.verifyTransferSuccess();
```