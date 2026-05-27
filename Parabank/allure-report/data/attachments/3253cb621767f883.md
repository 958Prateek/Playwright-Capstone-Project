# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: transferFunds\transferFunds.spec.js >> Transfer Funds Module >> TC04 - Transfer Page Visibility
- Location: tests\transferFunds\transferFunds.spec.js:48:10

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('text=Register')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - heading "Error 1015" [level=1] [ref=e5]
    - generic [ref=e6]: "Ray ID: a019d6684c29dbc8 •"
    - generic [ref=e7]: 2026-05-26 03:54:15 UTC
    - heading "You are being rate limited" [level=2] [ref=e8]
  - generic [ref=e10]:
    - heading "What happened?" [level=2] [ref=e11]
    - paragraph [ref=e12]: The owner of this website (parabank.parasoft.com) has banned you temporarily from accessing this website.
    - paragraph [ref=e13]:
      - text: Please see
      - link "https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/" [ref=e14] [cursor=pointer]:
        - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/
      - text: for more details.
  - generic [ref=e16]:
    - text: Was this page helpful?
    - button "Yes" [ref=e17] [cursor=pointer]
    - button "No" [ref=e18] [cursor=pointer]
  - paragraph [ref=e20]:
    - generic [ref=e21]:
      - text: "Cloudflare Ray ID:"
      - strong [ref=e22]: a019d6684c29dbc8
    - text: •
    - generic [ref=e23]:
      - text: "Your IP:"
      - button "Click to reveal" [ref=e24] [cursor=pointer]
      - text: •
    - generic [ref=e25]:
      - text: Performance & security by
      - link "Cloudflare" [ref=e26] [cursor=pointer]:
        - /url: https://www.cloudflare.com/5xx-error-landing
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | 
  3   | class RegisterPage {
  4   |     constructor(page) {
  5   |         this.page = page;
  6   |         this.registerLink =
  7   |             page.locator('text=Register');
  8   | 
  9   |         this.firstName =
  10  |             page.locator('#customer\\.firstName');
  11  | 
  12  |         this.lastName =
  13  |             page.locator('#customer\\.lastName');
  14  | 
  15  |         this.address =
  16  |             page.locator('#customer\\.address\\.street');
  17  | 
  18  |         this.city =
  19  |             page.locator('#customer\\.address\\.city');
  20  | 
  21  |         this.state =
  22  |             page.locator('#customer\\.address\\.state');
  23  | 
  24  |         this.zipCode =
  25  |             page.locator('#customer\\.address\\.zipCode');
  26  | 
  27  |         this.phone =
  28  |             page.locator('#customer\\.phoneNumber');
  29  | 
  30  |         this.ssn =
  31  |             page.locator('#customer\\.ssn');
  32  | 
  33  |         this.username =
  34  |             page.locator('#customer\\.username');
  35  | 
  36  |         this.password =
  37  |             page.locator('#customer\\.password');
  38  | 
  39  |         this.confirmPassword =
  40  |             page.locator('#repeatedPassword');
  41  | 
  42  |         this.registerButton =
  43  |             page.locator('input[value="Register"]');
  44  | 
  45  |         this.successMessage =
  46  |             page.locator('.title');
  47  |     }
  48  | 
  49  |     async gotoRegisterPage() {
  50  | 
  51  |         await this.page.goto(
  52  |             'https://parabank.parasoft.com/parabank/index.htm'
  53  |         );
  54  |         await this.page.waitForLoadState('domcontentloaded');
  55  | 
> 56  |         await this.registerLink.click();
      |                                 ^ Error: locator.click: Test timeout of 60000ms exceeded.
  57  |     }
  58  | 
  59  |     async registerUser(user) {
  60  |         await this.page.waitForLoadState(
  61  |             'domcontentloaded'
  62  |         );
  63  |         await this.firstName.fill(user.firstName);
  64  |         await this.lastName.fill(user.lastName);
  65  |         await this.address.fill(user.address);
  66  |         await this.city.fill(user.city);
  67  |         await this.state.fill(user.state);
  68  |         await this.zipCode.fill(user.zipCode);
  69  |         await this.phone.fill(user.phone);
  70  |         await this.ssn.fill(user.ssn);
  71  |         await this.username.fill(user.username);
  72  |         await this.password.fill(user.password);
  73  |         await this.confirmPassword.fill(user.password);
  74  |         await this.registerButton.click();
  75  |     }
  76  | 
  77  |     async verifyRegistration(username) {
  78  | 
  79  |         await expect(
  80  |             this.page.locator('#rightPanel')
  81  |         ).toContainText(
  82  |             // 'Your account was created successfully'
  83  |             'Welcome'
  84  |         );
  85  | 
  86  |         await expect(
  87  |             this.page.locator('#rightPanel')
  88  |         ).toContainText(
  89  |             username
  90  |         );
  91  |     }
  92  | 
  93  | 
  94  |     // async verifyRegistrationSuccess(username) {
  95  |     //     await expect(
  96  |     //         this.page.locator('#rightPanel')
  97  |     //     ).toContainText(username);
  98  |     // }
  99  | }
  100 | 
  101 | export default RegisterPage;
```