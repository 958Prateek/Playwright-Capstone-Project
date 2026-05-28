# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: billPay\billPay.spec.js >> Bill Pay Module >> TC02 - decimal Amount payment
- Location: tests\billPay\billPay.spec.js:30:10

# Error details

```
TypeError: billPay.verifyBillPayemnetSuccess is not a function
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
        - heading "Bill Payment Service" [level=1] [ref=e51]
        - paragraph [ref=e52]: Enter payee information
        - table [ref=e54]:
          - rowgroup [ref=e55]:
            - 'row "Payee Name: Electricity Board" [ref=e56]':
              - cell "Payee Name:" [ref=e57]
              - cell "Electricity Board" [ref=e58]:
                - textbox [ref=e59]: Electricity Board
              - cell [ref=e60]
            - 'row "Address: Pune" [ref=e61]':
              - cell "Address:" [ref=e62]
              - cell "Pune" [ref=e63]:
                - textbox [ref=e64]: Pune
              - cell [ref=e65]
            - 'row "City: Pune" [ref=e66]':
              - cell "City:" [ref=e67]
              - cell "Pune" [ref=e68]:
                - textbox [ref=e69]: Pune
              - cell [ref=e70]
            - 'row "State: MH" [ref=e71]':
              - cell "State:" [ref=e72]
              - cell "MH" [ref=e73]:
                - textbox [ref=e74]: MH
              - cell [ref=e75]
            - 'row "Zip Code: 411001" [ref=e76]':
              - cell "Zip Code:" [ref=e77]
              - cell "411001" [ref=e78]:
                - textbox [ref=e79]: "411001"
              - cell [ref=e80]
            - 'row "Phone #: 9125349995" [ref=e81]':
              - 'cell "Phone #:" [ref=e82]'
              - cell "9125349995" [ref=e83]:
                - textbox [ref=e84]: "9125349995"
              - cell [ref=e85]
            - row [ref=e86]:
              - cell [ref=e87]
            - 'row "Account #: 12345" [ref=e88]':
              - 'cell "Account #:" [ref=e89]'
              - cell "12345" [ref=e90]:
                - textbox [ref=e91]: "12345"
              - cell [ref=e92]
            - 'row "Verify Account #: 12345" [ref=e93]':
              - 'cell "Verify Account #:" [ref=e94]'
              - cell "12345" [ref=e95]:
                - textbox [ref=e96]: "12345"
              - cell [ref=e97]
            - row [ref=e98]:
              - cell [ref=e99]
            - 'row "Amount: $ 100.50" [ref=e100]':
              - 'cell "Amount: $" [ref=e101]'
              - cell "100.50" [ref=e102]:
                - textbox [ref=e103]: "100.50"
              - cell [ref=e104]
            - row [ref=e105]:
              - cell [ref=e106]
            - 'row "From account #: 15231" [ref=e107]':
              - 'cell "From account #:" [ref=e108]'
              - cell "15231" [ref=e109]:
                - combobox [ref=e110]:
                  - option "15231" [selected]
                  - option "15342"
            - row "Send Payment" [ref=e111]:
              - cell [ref=e112]
              - cell "Send Payment" [ref=e113]:
                - button "Send Payment" [active] [ref=e114] [cursor=pointer]
  - generic [ref=e116]:
    - list [ref=e117]:
      - listitem [ref=e118]:
        - link "Home" [ref=e119] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e120]:
        - link "About Us" [ref=e121] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e122]:
        - link "Services" [ref=e123] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e124]:
        - link "Products" [ref=e125] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e126]:
        - link "Locations" [ref=e127] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e128]:
        - link "Forum" [ref=e129] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e130]:
        - link "Site Map" [ref=e131] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e132]:
        - link "Contact Us" [ref=e133] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e134]: © Parasoft. All rights reserved.
    - list [ref=e135]:
      - listitem [ref=e136]: "Visit us at:"
      - listitem [ref=e137]:
        - link "www.parasoft.com" [ref=e138] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import RegisterPage from '../../POM/RegisterPage';
  3   | import OpenAccountPage from '../../POM/OpenAccountPage';
  4   | import BillPayPage from '../../POM/BillPayPage';
  5   | import registerData from '../../test-data/registerData.json';
  6   | import billPayData from '../../test-data/billPayData.json';
  7   | 
  8   | test.describe('Bill Pay Module', () => {
  9   |      let user;
  10  |      test.beforeEach(async ({ page }) => {
  11  |           const register = new RegisterPage(page);
  12  |           const openAccount = new OpenAccountPage(page);
  13  |           user = {
  14  |                ...registerData.validUser,
  15  |                username: 'user_' + Date.now()
  16  |           };
  17  |           await register.gotoRegisterPage();
  18  |           await register.registerUser(user);
  19  |           await register.verifyRegistration(user.username);
  20  |           await openAccount.openNewAccount('1');
  21  |      });
  22  | 
  23  |      test('TC01 - Valid bill Payment', async ({ page }) => {
  24  |           const billPay = new BillPayPage(page);
  25  |           await billPay.payBill(billPayData.billPayUser);
  26  |           await billPay.verifyBillPayemnetSuccess();
  27  |           console.log('Valid bill payemnt');
  28  |      });
  29  | 
  30  |      test('TC02 - decimal Amount payment', async ({ page }) => {
  31  |           const billPay = new BillPayPage(page);
  32  |           const paymentData = {
  33  |                ...billPayData.billPayUser,
  34  |                amount: billPayData.decimalPayment.amount
  35  |           };
  36  |           await billPay.payBill(paymentData);
> 37  |           await billPay.verifyBillPayemnetSuccess();
      |                         ^ TypeError: billPay.verifyBillPayemnetSuccess is not a function
  38  |           console.log('decimal payment successful');
  39  |      });
  40  | 
  41  |      test('TC03 - Empty Amount Validation', async ({ page }) => {
  42  |           const billPay = new BillPayPage(page);
  43  |           const paymentData = {
  44  |                ...billPayData.billPayUser,
  45  |                amount:billPayData.emptyPayment.amount
  46  |           };
  47  |           await billPay.payBill(paymentData);
  48  |           console.log(' Empty Amount Validation Done');
  49  |     });
  50  | 
  51  | 
  52  |     test('TC04 - Payee Name Visibility', async ({ page }) => {
  53  |         const billPay =  new BillPayPage(page);
  54  |         await billPay.gotoBillPayPage();
  55  |         await expect( billPay.payeeName).toBeVisible();
  56  |         console.log('Payee Name Field Visible');
  57  |     });
  58  | 
  59  | 
  60  |     test('TC05 - Account Number ', async ({ page }) => {
  61  |         const billPay =  new BillPayPage(page);
  62  |         await billPay.gotoBillPayPage();
  63  |         await expect(billPay.account).toBeVisible();
  64  |         console.log('Account Number  Visible');
  65  |     });
  66  | 
  67  |     test('TC06 - Bill Pay Page Visibility', async ({ page }) => {
  68  |         const billPay = new BillPayPage(page);
  69  |         await billPay.gotoBillPayPage();
  70  |         await billPay.verifyBillPayPageVisible();
  71  |         console.log( ' Bill Pay Page Visible');
  72  |     });
  73  | 
  74  |     test('TC07 - Send Payment Button ', async ({ page }) => {
  75  |         const billPay = new BillPayPage(page);
  76  |         await billPay.gotoBillPayPage();
  77  |         await expect( billPay.sendPaymentButton).toBeVisible();
  78  |         console.log('Send Payment Button Visible');
  79  |     });
  80  | 
  81  | 
  82  |     test('TC08 - Amount Field Visibility', async ({ page }) => {
  83  |         const billPay = new BillPayPage(page);
  84  |         await billPay.gotoBillPayPage();
  85  |         await expect( billPay.amount).toBeVisible();
  86  |         console.log(' Amount Field Visible');
  87  |     });
  88  | 
  89  | 
  90  |     test('TC09 - Bill Payment Confirmation', async ({ page }) => {
  91  |         const billPay = new BillPayPage(page);
  92  |         await billPay.payBill(  billPayData.billPayUser);
  93  |         await billPay.verifyBillPaymentSuccess();
  94  |         console.log(' Bill Payment Confirmation Verified');
  95  |     });
  96  | 
  97  | 
  98  |     test('TC10 - Session Persistence Validation', async ({ page }) => {
  99  |         const billPay = new BillPayPage(page);
  100 |         await billPay.gotoBillPayPage();
  101 |         await billPay.refreshPage();
  102 |         await billPay.verifyBillPayPageVisible();
  103 |         console.log('Session Persistence Verified');
  104 |     });
  105 | 
  106 | 
  107 |     test('TC11 - Unauthorized Access Validation', async ({ page }) => {
  108 |         await page.goto( 'https://parabank.parasoft.com/parabank/billpay.htm');
  109 |         await expect(page.locator('input[value="Log In"]')).toBeVisible();
  110 |         console.log(' Unauthorized Access Blocked');
  111 |     });
  112 | 
  113 | 
  114 |     test('TC12 - UI Validation', async ({ page }) => {
  115 |         const billPay = new BillPayPage(page);
  116 |         await billPay.gotoBillPayPage();
  117 |         await expect( billPay.payeeName).toBeVisible();
  118 |         await expect( billPay.sendPaymentButton).toBeVisible();
  119 |         console.log(' UI Validation Done');
  120 |     });
  121 | 
  122 | 
  123 |     test('TC13 - Workflow Validation', async ({ page }) => {
  124 |         const billPay = new BillPayPage(page);
  125 |         await billPay.gotoBillPayPage();
  126 |         await billPay.payBill( billPayData.billPayUser);
  127 |         await billPay.verifyBillPaymentSuccess();
  128 |         console.log('Workflow Validation Done');
  129 |     });
  130 | 
  131 |     test('TC14 - Bill Pay URL Validation', async ({ page }) => {
  132 |         const billPay = new BillPayPage(page);
  133 |         await billPay.gotoBillPayPage();
  134 |         await expect(page).toHaveURL(/billpay.htm/);
  135 |         console.log('Bill Pay URL Verified');
  136 |     });
  137 | 
```