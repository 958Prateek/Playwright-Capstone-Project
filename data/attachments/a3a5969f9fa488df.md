# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: transferFunds\transferFunds.spec.js >> Transfer Funds Module >> TC10 - Unauthorized Access Validation
- Location: tests\transferFunds\transferFunds.spec.js:96:10

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#rightPanel')
Expected substring: "Welcome"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#rightPanel')

```

```yaml
- banner:
  - heading "Error 1015" [level=1]
  - text: "Ray ID: a01aad33cf011f99 • 2026-05-26 06:20:53 UTC"
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
  - strong: a01aad33cf011f99
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
  3  | class RegisterPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.registerLink =
  7  |             page.locator('text=Register');
  8  | 
  9  |         this.firstName =
  10 |             page.locator('#customer\\.firstName');
  11 | 
  12 |         this.lastName =
  13 |             page.locator('#customer\\.lastName');
  14 | 
  15 |         this.address =
  16 |             page.locator('#customer\\.address\\.street');
  17 | 
  18 |         this.city =
  19 |             page.locator('#customer\\.address\\.city');
  20 | 
  21 |         this.state =
  22 |             page.locator('#customer\\.address\\.state');
  23 | 
  24 |         this.zipCode =
  25 |             page.locator('#customer\\.address\\.zipCode');
  26 | 
  27 |         this.phone =
  28 |             page.locator('#customer\\.phoneNumber');
  29 | 
  30 |         this.ssn =
  31 |             page.locator('#customer\\.ssn');
  32 | 
  33 |         this.username =
  34 |             page.locator('#customer\\.username');
  35 | 
  36 |         this.password =
  37 |             page.locator('#customer\\.password');
  38 | 
  39 |         this.confirmPassword =
  40 |             page.locator('#repeatedPassword');
  41 | 
  42 |         this.registerButton =
  43 |             page.locator('input[value="Register"]');
  44 | 
  45 |         this.successMessage =
  46 |             page.locator('.title');
  47 |     }
  48 | 
  49 |     async gotoRegisterPage() {
  50 |         await this.page.goto(
  51 |             'https://parabank.parasoft.com/parabank/index.htm');
  52 |         await this.page.waitForLoadState('domcontentloaded');
  53 |         await this.registerLink.click();
  54 |     }
  55 | 
  56 |     async registerUser(user) {
  57 |         await this.page.waitForLoadState(
  58 |             'domcontentloaded'
  59 |         );
  60 |         await this.firstName.fill(user.firstName);
  61 |         await this.lastName.fill(user.lastName);
  62 |         await this.address.fill(user.address);
  63 |         await this.city.fill(user.city);
  64 |         await this.state.fill(user.state);
  65 |         await this.zipCode.fill(user.zipCode);
  66 |         await this.phone.fill(user.phone);
  67 |         await this.ssn.fill(user.ssn);
  68 |         await this.username.fill(user.username);
  69 |         await this.password.fill(user.password);
  70 |         await this.confirmPassword.fill(user.password);
  71 |         await this.registerButton.click();
  72 |     }
  73 | 
  74 |     async verifyRegistration(username) {
  75 | 
  76 |         await expect(
  77 |             this.page.locator('#rightPanel')
> 78 |         ).toContainText(
     |           ^ Error: expect(locator).toContainText(expected) failed
  79 |             // 'Your account was created successfully'
  80 |             'Welcome'
  81 |         );
  82 | 
  83 |         await expect(
  84 |             this.page.locator('#rightPanel')
  85 |         ).toContainText(
  86 |             username
  87 |         );
  88 |     }
  89 | 
  90 | 
  91 |     // async verifyRegistrationSuccess(username) {
  92 |     //     await expect(
  93 |     //         this.page.locator('#rightPanel')
  94 |     //     ).toContainText(username);
  95 |     // }
  96 | }
  97 | 
  98 | export default RegisterPage;
```