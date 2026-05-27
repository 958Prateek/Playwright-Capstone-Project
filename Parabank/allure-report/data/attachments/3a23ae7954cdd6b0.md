# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: billPay\billPay.spec.js >> Bill Pay Module >> TC11 - Unauthorized Access Validation
- Location: tests\billPay\billPay.spec.js:107:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[value="Log In"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('input[value="Log In"]')

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
- heading "Bill Payment Service" [level=1]
- paragraph: Enter payee information
- table:
  - rowgroup:
    - row "Payee Name:":
      - cell "Payee Name:"
      - cell:
        - textbox
      - cell
    - row "Address:":
      - cell "Address:"
      - cell:
        - textbox
      - cell
    - row "City:":
      - cell "City:"
      - cell:
        - textbox
      - cell
    - row "State:":
      - cell "State:"
      - cell:
        - textbox
      - cell
    - row "Zip Code:":
      - cell "Zip Code:"
      - cell:
        - textbox
      - cell
    - 'row "Phone #:"':
      - 'cell "Phone #:"'
      - cell:
        - textbox
      - cell
    - row:
      - cell
    - 'row "Account #:"':
      - 'cell "Account #:"'
      - cell:
        - textbox
      - cell
    - 'row "Verify Account #:"':
      - 'cell "Verify Account #:"'
      - cell:
        - textbox
      - cell
    - row:
      - cell
    - 'row "Amount: $"':
      - 'cell "Amount: $"'
      - cell:
        - textbox
      - cell
    - row:
      - cell
    - 'row "From account #: 17673"':
      - 'cell "From account #:"'
      - cell "17673":
        - combobox:
          - option "17673" [selected]
          - option "17784"
    - row "Send Payment":
      - cell
      - cell "Send Payment":
        - button "Send Payment"
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
  37  |           await billPay.verifyBillPayemnetSuccess();
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
> 109 |         await expect(page.locator('input[value="Log In"]')).toBeVisible();
      |                                                             ^ Error: expect(locator).toBeVisible() failed
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
  138 | 
  139 |     test('TC15 - Multiple Bill Payments', async ({ page }) => {
  140 |         const billPay = new BillPayPage(page);
  141 |         await billPay.payBill( billPayData.billPayUser);
  142 |         await billPay.verifyBillPaymentSuccess();
  143 |         await billPay.payBill(billPayData.billPayUser);
  144 |         await billPay.verifyBillPaymentSuccess();
  145 |         console.log('Multiple Bill Payments Successful');
  146 |     });
  147 | 
  148 | //     test.describe.configure({
  149 | //         mode: 'parallel'
  150 | //     });
  151 | 
  152 | });
  153 | 
```