# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\authentication.spec.js >> TC02 - Invalid Login
- Location: tests\authentication\authentication.spec.js:21:5

# Error details

```
Error: locator.clear: Test ended.
Call log:
  - waiting for locator('input[name="username"]')

```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export default class LoginPage {
  4  | 
  5  |     constructor(page) {
  6  | 
  7  |         this.page = page;
  8  | 
  9  |         this.username =
  10 |             page.locator('input[name="username"]');
  11 | 
  12 |         this.password =
  13 |             page.locator('input[name="password"]');
  14 | 
  15 |         this.loginBtn =
  16 |             page.locator('input[value="Log In"]');
  17 | 
  18 |         this.accountOverview =
  19 |             page.locator('h1.title');
  20 |         this.logoutLink =
  21 |             page.locator('a[href*="logout"]');
  22 |     }
  23 | 
  24 |     async gotoLoginPage() {
  25 |         await this.page.goto(
  26 |             'https://parabank.parasoft.com/parabank/index.htm'
  27 |         );
  28 |         await this.page.waitForTimeout(2000);
  29 |     }
  30 | 
  31 |     async login(username, password) {
  32 |         await this.page.goto(
  33 |             'https://parabank.parasoft.com/parabank/index.htm'
  34 |         );
  35 | 
> 36 |         await this.username.clear();
     |                             ^ Error: locator.clear: Test ended.
  37 |         await this.username.fill(username);
  38 |         await this.password.clear();
  39 |         await this.password.fill(password);
  40 |         await Promise.all([
  41 |             this.page.waitForNavigation(),
  42 |             this.loginBtn.click()
  43 |         ]);
  44 |         // await this.loginBtn.click();
  45 |         // await this.page.waitForURL(
  46 |         //     '**/overview.htm',
  47 |         //     { timeout: 15000 }
  48 |         // );
  49 |     }
  50 | 
  51 |     async logout() {
  52 |         await this.logoutLink.click();
  53 |         await this.page.waitForTimeout(3000);
  54 |     }
  55 | 
  56 |     async verifyLoginSuccess() {
  57 |         await expect(
  58 |             this.page.locator('body')
  59 |         ).toContainText(
  60 |             'Accounts Overview',
  61 |             { timeout: 15000 }
  62 |         );
  63 |     }
  64 | 
  65 |     async verifyInvalidLogin() {
  66 |         await expect(
  67 |             this.page.locator('body')
  68 |         ).toContainText(
  69 |             'Customer Login'
  70 |         );
  71 |     }
  72 | }
```