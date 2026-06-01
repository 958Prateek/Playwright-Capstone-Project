# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication/authentication.spec.js >> TC01 - Valid Login
- Location: tests/authentication/authentication.spec.js:9:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.clear: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('input[name="username"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - heading "Error 1015" [level=1] [ref=e5]
    - generic [ref=e6]: "Ray ID: a03b4bfe1cca1bc3 •"
    - generic [ref=e7]: 2026-05-30 05:21:42 UTC
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
      - strong [ref=e22]: a03b4bfe1cca1bc3
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
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export default class LoginPage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |         this.username = page.locator('input[name="username"]');
  8  |         this.password = page.locator('input[name="password"]');
  9  |         this.loginBtn =page.locator('input[value="Log In"]');
  10 |         this.accountOverview =  page.locator('h1.title');
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
     |                             ^ Error: locator.clear: Test timeout of 60000ms exceeded.
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
  55 |         ).toContainText(
  56 |             'Customer Login'
  57 |         );
  58 |     }
  59 | }
```