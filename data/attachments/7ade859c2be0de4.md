# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: billPay/billPay.spec.js >> Bill Pay Module >> TC06 - Bill Pay Page Visibility
- Location: tests/billPay/billPay.spec.js:67:10

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('heading', { name: 'Bill Payment Service' })
Expected substring: "Bill Payment Service"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Bill Payment Service' })

```

```yaml
- banner:
  - heading "Error 1015" [level=1]
  - text: "Ray ID: a055ac79ba8b15fd • 2026-06-02 10:11:23 UTC"
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
  - strong: a055ac79ba8b15fd
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | class BillPayPage {
  4  |      constructor(page) {
  5  |           this.page = page;
  6  |           this.billPayLink = page.getByRole('link', {name:'Bill Pay'});
  7  |           this.payeeName = page.locator('input[name="payee.name"]');
  8  |           this.address =page.locator('input[name="payee.address.street"]');
  9  |           this.city =page.locator('input[name="payee.address.city"]');
  10 |           this.state =page.locator( 'input[name="payee.address.state"]');
  11 |           this.zipCode = page.locator('input[name="payee.address.zipCode"]' );
  12 |           this.phone = page.locator('input[name="payee.phoneNumber"]');
  13 |           this.account =page.locator('input[name="payee.accountNumber"]');
  14 |           this.verifyAccount =page.locator('input[name="verifyAccount"]');
  15 |           this.amount = page.locator('input[name="amount"]');
  16 |           this.sendPaymentButton =page.locator( 'input[value="Send Payment"]');
  17 |           this.successMessage = page.locator('#billpayResult');
  18 |           this.pageTitle = page.getByRole('heading',{name: 'Bill Payment Service'});
  19 |      }
  20 | 
  21 |      async gotoBillPayPage() {
  22 |         await this.billPayLink.click();
  23 |      }
  24 | 
  25 |     async payBill(data) {
  26 |         await this.gotoBillPayPage();
  27 |         await this.payeeName.fill( data.payeeName );
  28 |         await this.address.fill(data.address);
  29 |         await this.city.fill( data.city);
  30 |         await this.state.fill(data.state);
  31 |         await this.zipCode.fill(data.zipCode);
  32 |         await this.phone.fill(data.phone );
  33 |         await this.account.fill(data.account);
  34 |         await this.verifyAccount.fill( data.verifyAccount);
  35 |         await this.amount.fill(data.amount);
  36 |         await this.sendPaymentButton.click();
  37 |     }
  38 | 
  39 |     async verifyBillPaymentSuccess() {
  40 |         await expect(this.successMessage)
  41 |                .toContainText( 'Bill Payment Complete'
  42 |           );
  43 |     }
  44 | 
  45 |     async verifyBillPayPageVisible() {
> 46 |         await expect(this.pageTitle).toContainText('Bill Payment Service');
     |                                      ^ Error: expect(locator).toContainText(expected) failed
  47 |     }
  48 | 
  49 |     async refreshPage() {
  50 |         await this.page.reload();
  51 |     }
  52 | }
  53 | export default BillPayPage;
```