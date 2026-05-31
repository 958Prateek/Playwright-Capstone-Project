# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\authentication.spec.js >> TC15 - SQL Injection Login Validation
- Location: tests\authentication\authentication.spec.js:214:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected substring: "Account Overview"
Received string:    "parabank.parasoft.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for parabank.parasoft.com to respondRay ID: a02c984809b36d9fPerformance and Security by CloudflarePrivacy"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body')
    14 × locator resolved to <body>…</body>
       - unexpected value "parabank.parasoft.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for parabank.parasoft.com to respondRay ID: a02c984809b36d9fPerformance and Security by CloudflarePrivacy"

```

```yaml
- main:
  - img "Icon for parabank.parasoft.com"
  - heading "parabank.parasoft.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a02c984809b36d9f
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  121 |         loginData.validUser.password
  122 |     );
  123 |     await login.verifyLoginSuccess();
  124 |     await login.logout();
  125 |     await page.goBack();
  126 |     await expect(
  127 |         page.locator('body')
  128 |     ).toContainText('Accounts Overview');
  129 | 
  130 |     console.log(' Browser Back Validation Done');
  131 | });
  132 | 
  133 | 
  134 | test('TC10 - Remember Me Validation', async ({ page }) => {
  135 |     const login = new LoginPage(page);
  136 |     await login.gotoLoginPage();
  137 |     await login.login(
  138 |         loginData.validUser.username,
  139 |         loginData.validUser.password
  140 |     );
  141 |     await login.verifyLoginSuccess();
  142 |     await page.reload();
  143 |     await login.verifyLoginSuccess();
  144 |     console.log(' Remember Me Validation Done');
  145 | });
  146 | 
  147 | 
  148 | test('TC11 - Unauthorized Access Validation', async ({ page }) => {
  149 |     await page.goto(
  150 |         'https://parabank.parasoft.com/parabank/overview.htm'
  151 |     );
  152 |     await expect(
  153 |         page.locator('input[value="Log In"]')
  154 |     ).toBeVisible();
  155 |     console.log(' Unauthorized Access Validation Done');
  156 | });
  157 | 
  158 | 
  159 | test('TC12 - Concurrent Login Validation', async ({ browser }) => {
  160 |     const context1 = await browser.newContext();
  161 |     const page1 = await context1.newPage();
  162 |     const login1 = new LoginPage(page1);
  163 |     await login1.gotoLoginPage();
  164 |     await login1.login(
  165 |         loginData.validUser.username,
  166 |         loginData.validUser.password
  167 |     );
  168 |     await login1.verifyLoginSuccess();
  169 |     const context2 = await browser.newContext();
  170 |     const page2 = await context2.newPage();
  171 |     const login2 = new LoginPage(page2);
  172 |     await login2.gotoLoginPage();
  173 |     await login2.login(
  174 |         loginData.validUser.username,
  175 |         loginData.validUser.password
  176 |     );
  177 |     await login2.verifyLoginSuccess();
  178 |     console.log(' Concurrent Login Validation Done');
  179 | });
  180 | 
  181 | 
  182 | test('TC13 - Direct URL Access After Logout', async ({ page }) => {
  183 |     const login = new LoginPage(page);
  184 |     await login.gotoLoginPage();
  185 |     await login.login(
  186 |         loginData.validUser.username,
  187 |         loginData.validUser.password
  188 |     );
  189 | 
  190 |     await login.verifyLoginSuccess();
  191 |     await login.logout();
  192 |     await page.goto(
  193 |         'https://parabank.parasoft.com/parabank/overview.htm'
  194 |     );
  195 |     await expect(
  196 |         page.locator('input[value="Log In"]')
  197 |     ).toBeVisible();
  198 | 
  199 |     console.log(
  200 |         'Direct URL Access After Logout Validated'
  201 |     );
  202 | });
  203 | 
  204 | 
  205 | test('TC14 - Login Page Refresh Validation', async ({ page }) => {
  206 |     const login = new LoginPage(page);
  207 |     await login.gotoLoginPage();
  208 |     await page.reload();
  209 |     await expect(page.locator('input[name="username"]')).toBeVisible();
  210 |     await expect(page.locator('input[name="password"]')).toBeVisible();
  211 |     console.log(' Login Page Refresh Validation Done');
  212 | });
  213 | 
  214 | test('TC15 - SQL Injection Login Validation', async ({ page }) => {
  215 |     const login = new LoginPage(page);
  216 |     await login.gotoLoginPage();
  217 |     await login.login(
  218 |         "' OR '1'='1",
  219 |         "' OR '1'='1",
  220 |     );
> 221 |     await expect(page.locator('body')).toContainText('Account Overview');
      |                                        ^ Error: expect(locator).toContainText(expected) failed
  222 |     console.log('SQL Injection Validation done');
  223 | });
```