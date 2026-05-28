# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: transferFunds\transferFunds.spec.js >> Transfer Funds Module >> TC12 - Transfer Workflow 
- Location: tests\transferFunds\transferFunds.spec.js:111:10

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#type')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#type')

```

```yaml
- banner:
  - heading "Error 1015" [level=1]
  - text: "Ray ID: a019d0435bcfdcc4 • 2026-05-26 03:50:04 UTC"
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
  - strong: a019d0435bcfdcc4
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
  3  | class OpenAccountPage {
  4  |      constructor(page) {
  5  |           this.page = page;
  6  |           this.openAccountLink =
  7  |                page.locator('text=Open New Account');
  8  | 
  9  |           this.accountTypeDropdown =
  10 |                page.locator('#type');
  11 | 
  12 |           this.fromAccountDropdown =
  13 |                page.locator('#fromAccountId');
  14 | 
  15 |           this.openAccountButton =
  16 |                page.locator(
  17 |                     'input[value="Open New Account"]'
  18 |                );
  19 |           this.successMessage =
  20 |                page.locator('#openAccountResult');
  21 | 
  22 |           this.newAccountNumber =
  23 |                page.locator('#newAccountId');
  24 | 
  25 |           this.accountOpenedText =
  26 |                page.getByRole('heading', {
  27 |                     name: 'Account Opened!'
  28 |                });
  29 |      }
  30 | 
  31 |      async gotoOpenAccountPage() {
  32 |           await this.openAccountLink.click();
  33 |      }
  34 |      async selectAccountType(type) {
  35 |           await this.accountTypeDropdown
  36 |                .selectOption(type);
  37 |      }
  38 | 
  39 |      async clickOpenAccountButton() {
  40 |           await this.openAccountButton.click();
  41 |      }
  42 | 
  43 |      async openNewAccount(type) {
  44 | 
  45 |           await this.page.goto(
  46 |                'https://parabank.parasoft.com/parabank/openaccount.htm'
  47 |           );
  48 |           await this.page.waitForLoadState('domcontentloaded');
  49 |           await expect(
  50 |                this.accountTypeDropdown
> 51 |           ).toBeVisible();
     |             ^ Error: expect(locator).toBeVisible() failed
  52 |           await this.accountTypeDropdown
  53 |                .selectOption(type);
  54 |           await this.page.waitForTimeout(1000);
  55 |           await this.openAccountButton.click();
  56 |           await this.page.waitForLoadState('networkidle');
  57 |           await this.page.waitForTimeout(2000);
  58 |      }
  59 | 
  60 |      // async openNewAccount(type) {
  61 |      //      await this.page.waitForLoadState(
  62 |      //           'networkidle'
  63 |      //      );
  64 |      //      await this.accountTypeDropdown.selectOption(type);
  65 |      //      await this.page.waitForTimeout(2000);
  66 |      //      await this.openAccountButton.click();
  67 |      //      await this.page.waitForLoadState(
  68 |      //           'networkidle'
  69 |      //      );
  70 |      //      await this.page.waitForTimeout(3000);
  71 |      // }
  72 | 
  73 |      async verifyAccountOpened() {
  74 |           await expect(
  75 |                this.page.locator(
  76 |                     '#openAccountResult'
  77 |                )
  78 |           ).toContainText(
  79 |                'Congratulations'
  80 |           );
  81 |      }
  82 | 
  83 | 
  84 |      async verifyNewAccountNumberVisible() {
  85 |           await expect(
  86 |                this.newAccountNumber.first()
  87 |           ).not.toHaveText('');
  88 |      }
  89 | }
  90 | export default OpenAccountPage;
```