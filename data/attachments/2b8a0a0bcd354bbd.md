# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findTransaction\findTransactions.spec.js >> Find Transactions Module >> TC03 - Search By Date
- Location: tests\findTransaction\findTransactions.spec.js:50:10

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('text=Register')

```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | class RegisterPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.registerLink =page.locator('text=Register');
  7  |         this.firstName = page.locator('#customer\\.firstName');
  8  |         this.lastName = page.locator('#customer\\.lastName');
  9  |         this.address = page.locator('#customer\\.address\\.street');
  10 |         this.city = page.locator('#customer\\.address\\.city');
  11 |         this.state = page.locator('#customer\\.address\\.state');
  12 |         this.zipCode = page.locator('#customer\\.address\\.zipCode');
  13 |         this.phone = page.locator('#customer\\.phoneNumber');
  14 |         this.ssn = page.locator('#customer\\.ssn');
  15 |         this.username = page.locator('#customer\\.username');
  16 |         this.password = page.locator('#customer\\.password');
  17 |         this.confirmPassword = page.locator('#repeatedPassword');
  18 |         this.registerButton = page.locator('input[value="Register"]');
  19 |         this.successMessage = page.locator('.title');
  20 |     }
  21 | 
  22 |     async gotoRegisterPage() {
  23 |         await this.page.goto(
  24 |             'https://parabank.parasoft.com/parabank/index.htm');
  25 |         await this.page.waitForLoadState('domcontentloaded');
> 26 |         await this.registerLink.click();
     |                                 ^ Error: locator.click: Test ended.
  27 |     }
  28 | 
  29 |     async registerUser(user) {
  30 |         await this.page.waitForLoadState('domcontentloaded');
  31 |         await this.firstName.fill(user.firstName);
  32 |         await this.lastName.fill(user.lastName);
  33 |         await this.address.fill(user.address);
  34 |         await this.city.fill(user.city);
  35 |         await this.state.fill(user.state);
  36 |         await this.zipCode.fill(user.zipCode);
  37 |         await this.phone.fill(user.phone);
  38 |         await this.ssn.fill(user.ssn);
  39 |         await this.username.fill(user.username);
  40 |         await this.password.fill(user.password);
  41 |         await this.confirmPassword.fill(user.confirmpassword || user.password);
  42 |         await this.registerButton.click();
  43 |     }
  44 | 
  45 |     async verifyRegistration(username) {
  46 |         await expect(
  47 |             this.page.locator('body')
  48 |             // this.page.locator('#rightPanel')
  49 |         ).toContainText(
  50 |             // 'Your account was created successfully'
  51 |             // 'Welcome'
  52 |             username
  53 |         );
  54 |         await expect(
  55 |             this.page.locator('#rightPanel')
  56 |         ).toContainText(
  57 |             username
  58 |         );
  59 |     }
  60 | 
  61 | 
  62 |     // async verifyRegistrationSuccess(username) {
  63 |     //     await expect(
  64 |     //         this.page.locator('#rightPanel')
  65 |     //     ).toContainText(username);
  66 |     // }
  67 | }
  68 | 
  69 | export default RegisterPage;
```