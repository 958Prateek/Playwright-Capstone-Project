# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: billPay/billPay.spec.js >> Bill Pay Module >> TC17 - Verify Send Payment Button Enabled
- Location: tests/billPay/billPay.spec.js:166:10

# Error details

```
Error: expect(locator).toBeEnabled() failed

Locator: locator('input[value="Send Payment"]')
Expected: enabled
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeEnabled" with timeout 5000ms
  - waiting for locator('input[value="Send Payment"]')

```

```yaml
- banner:
  - heading "Error 1015" [level=1]
  - text: "Ray ID: a065eb767d70f36b • 2026-06-04 09:30:35 UTC"
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
  - strong: a065eb767d70f36b
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing
```

# Test source

```ts
  70  |           await billPay.verifyBillPayPageVisible();
  71  |           console.log(' Bill Pay Page Visible');
  72  |      });
  73  | 
  74  |      test('TC07 - Send Payment Button ', async ({ page }) => {
  75  |           const billPay = new BillPayPage(page);
  76  |           await billPay.gotoBillPayPage();
  77  |           await expect(billPay.sendPaymentButton).toBeVisible();
  78  |           console.log('Send Payment Button Visible');
  79  |      });
  80  | 
  81  | 
  82  |      test('TC08 - Amount Field Visibility', async ({ page }) => {
  83  |           const billPay = new BillPayPage(page);
  84  |           await billPay.gotoBillPayPage();
  85  |           await expect(billPay.amount).toBeVisible();
  86  |           console.log(' Amount Field Visible');
  87  |      });
  88  | 
  89  | 
  90  |      test('TC09 - Bill Payment Confirmation', async ({ page }) => {
  91  |           const billPay = new BillPayPage(page);
  92  |           await billPay.payBill(billPayData.billPayUser);
  93  |           await billPay.verifyBillPaymentSuccess();
  94  |           console.log(' Bill Payment Confirmation Verified');
  95  |      });
  96  | 
  97  | 
  98  |      test('TC10 - Session Persistence Validation', async ({ page }) => {
  99  |           const billPay = new BillPayPage(page);
  100 |           await billPay.gotoBillPayPage();
  101 |           await billPay.refreshPage();
  102 |           await billPay.verifyBillPayPageVisible();
  103 |           console.log('Session Persistence Verified');
  104 |      });
  105 | 
  106 | 
  107 |      test('TC11 - Unauthorized Access Validation', async ({ page }) => {
  108 |           await page.goto('https://parabank.parasoft.com/parabank/logout.htm');
  109 |           await page.goto('https://parabank.parasoft.com/parabank/billpay.htm');
  110 |           await expect(page.locator('input[value="Log In"]')).toBeVisible();
  111 |           console.log(' Unauthorized Access Blocked');
  112 |      });
  113 | 
  114 | 
  115 |      test('TC12 - UI Validation', async ({ page }) => {
  116 |           const billPay = new BillPayPage(page);
  117 |           await billPay.gotoBillPayPage();
  118 |           await expect(billPay.payeeName).toBeVisible();
  119 |           await expect(billPay.sendPaymentButton).toBeVisible();
  120 |           console.log(' UI Validation Done');
  121 |      });
  122 | 
  123 | 
  124 |      test('TC13 - Workflow Validation', async ({ page }) => {
  125 |           const billPay = new BillPayPage(page);
  126 |           await billPay.gotoBillPayPage();
  127 |           await billPay.payBill(billPayData.billPayUser);
  128 |           await billPay.verifyBillPaymentSuccess();
  129 |           console.log('Workflow Validation Done');
  130 |      });
  131 | 
  132 |      test('TC14 - Bill Pay URL Validation', async ({ page }) => {
  133 |           const billPay = new BillPayPage(page);
  134 |           await billPay.gotoBillPayPage();
  135 |           await expect(page).toHaveURL(/billpay.htm/);
  136 |           console.log('Bill Pay URL Verified');
  137 |      });
  138 | 
  139 | 
  140 |      test('TC15 - Multiple Bill Payments', async ({ page }) => {
  141 |           const billPay = new BillPayPage(page);
  142 |           await billPay.payBill(billPayData.billPayUser);
  143 |           await billPay.verifyBillPaymentSuccess();
  144 |           await billPay.payBill(billPayData.billPayUser);
  145 |           await billPay.verifyBillPaymentSuccess();
  146 |           console.log('Multiple Bill Payments Successful');
  147 |      });
  148 | 
  149 |      test('TC16 - Verify All Input Fields Visible', async ({ page }) => {
  150 |           const billPay = new BillPayPage(page);
  151 | 
  152 |           await billPay.gotoBillPayPage();
  153 |           await expect(billPay.payeeName).toBeVisible();
  154 |           await expect(billPay.address).toBeVisible();
  155 |           await expect(billPay.city).toBeVisible();
  156 |           await expect(billPay.state).toBeVisible();
  157 |           await expect(billPay.zipCode).toBeVisible();
  158 |           await expect(billPay.phone).toBeVisible();
  159 |           await expect(billPay.account).toBeVisible();
  160 |           await expect(billPay.verifyAccount).toBeVisible();
  161 |           await expect(billPay.amount).toBeVisible();
  162 | 
  163 |           console.log(' All Bill Pay Fields Visible');
  164 |      });
  165 | 
  166 |      test('TC17 - Verify Send Payment Button Enabled', async ({ page }) => {
  167 |           const billPay = new BillPayPage(page);
  168 | 
  169 |           await billPay.gotoBillPayPage();
> 170 |           await expect(billPay.sendPaymentButton).toBeEnabled();
      |                                                   ^ Error: expect(locator).toBeEnabled() failed
  171 |           console.log(' Send Payment Button Enabled');
  172 |      });
  173 | 
  174 |      test('TC18 - Verify Bill Pay Form Fields Visibility', async ({ page }) => {
  175 |           const billPay = new BillPayPage(page);
  176 | 
  177 |           await billPay.gotoBillPayPage();
  178 | 
  179 |           await expect(billPay.payeeName).toBeVisible();
  180 |           await expect(billPay.address).toBeVisible();
  181 |           await expect(billPay.city).toBeVisible();
  182 |           await expect(billPay.state).toBeVisible();
  183 |           await expect(billPay.zipCode).toBeVisible();
  184 |           await expect(billPay.amount).toBeVisible();
  185 | 
  186 |           console.log(' Bill Pay Form Fields Verified');
  187 |           });
  188 | 
  189 |      // test.describe.configure({
  190 |      //         mode: 'parallel'
  191 |      //     });
  192 | 
  193 | });
  194 | 
```