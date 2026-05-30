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
  6  |         this.page = page;
  7  |         this.username = page.locator('input[name="username"]');
  8  |         this.password = page.locator('input[name="password"]');
  9  |         this.loginBtn = page.locator('input[value="Log In"]');
  10 |         this.accountOverview = page.locator('h1.title');
  11 |         this.logoutLink = page.locator('a[href*="logout"]');
  12 |     }
  13 | 
  14 |     async gotoLoginPage() {
  15 |         await this.page.goto(
  16 |             'https://parabank.parasoft.com/parabank/index.htm'
  17 |         );
  18 |         await this.page.waitForTimeout(2000);
  19 |     }
  20 |     async login(username, password) {
  21 |         await this.page.goto(
  22 |             'https://parabank.parasoft.com/parabank/index.htm'
  23 |         );
> 24 |         await this.username.clear();
     |                             ^ Error: locator.clear: Test ended.
  25 |         await this.username.fill(username);
  26 |         await this.password.clear();
  27 |         await this.password.fill(password);
  28 |         await Promise.all([
  29 |             this.page.waitForNavigation(),
  30 |             this.loginBtn.click()
  31 |         ]);
  32 |         // await this.loginBtn.click();
  33 |         // await this.page.waitForURL(
  34 |         //     '**/overview.htm',
  35 |         //     { timeout: 15000 }
  36 |         // );
  37 |     }
  38 | 
  39 |     async logout() {
  40 |         await this.logoutLink.click();
  41 |         await this.page.waitForTimeout(3000);
  42 |     }
  43 |     async verifyLoginSuccess() {
  44 |         await expect(
  45 |             this.page.locator('body')
  46 |         ).toContainText(
  47 |             'Accounts Overview',
  48 |             { timeout: 15000 }
  49 |         );
  50 |     }
  51 | 
  52 |     async verifyInvalidLogin() {
  53 |         await expect(
  54 |             this.page.locator('body')
  55 |         ).not.toContainText(
  56 |             'Accounts Overview'
  57 |         );
  58 |     }
  59 | }
```