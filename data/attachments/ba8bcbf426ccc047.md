# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\authentication.spec.js >> TC08 - Multiple Login Attempts
- Location: tests\authentication\authentication.spec.js:106:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[name="username"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('input[name="username"]')

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome John Smith
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- list:
  - listitem: ATM Services
  - listitem:
    - link "Withdraw Funds":
      - /url: services/ParaBank?wsdl
  - listitem:
    - link "Transfer Funds":
      - /url: services/ParaBank?wsdl
  - listitem:
    - link "Check Balances":
      - /url: services/ParaBank?wsdl
  - listitem:
    - link "Make Deposits":
      - /url: services/ParaBank?wsdl
- list:
  - listitem: Online Services
  - listitem:
    - link "Bill Pay":
      - /url: services/bank?_wadl&_type=xml
  - listitem:
    - link "Account History":
      - /url: services/bank?_wadl&_type=xml
  - listitem:
    - link "Transfer Funds":
      - /url: services/bank?_wadl&_type=xml
- paragraph:
  - link "Read More":
    - /url: services.htm
- heading "Latest News" [level=4]
- list:
  - listitem: 05/29/2026
  - listitem:
    - link "ParaBank Is Now Re-Opened":
      - /url: news.htm#6
  - listitem:
    - link "New! Online Bill Pay":
      - /url: news.htm#5
  - listitem:
    - link "New! Online Account Transfers":
      - /url: news.htm#4
- paragraph:
  - link "Read More":
    - /url: news.htm
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  12  | 
  13  | test('TC01 - Valid Login', async ({ page }) => {
  14  |     const login = new LoginPage(page);
  15  |     await login.gotoLoginPage();
  16  |     await login.login(
  17  |         loginData.validUser.username,
  18  |         loginData.validUser.password
  19  |     );
  20  |     await login.verifyLoginSuccess();
  21  |     console.log(' Valid Login Successful');
  22  | });
  23  | 
  24  | 
  25  | test('TC02 - Invalid Login', async ({ page }) => {
  26  |     const login = new LoginPage(page);
  27  |     await login.gotoLoginPage();
  28  |     await login.login(
  29  |         loginData.invalidUser.username,
  30  |         loginData.invalidUser.password
  31  |     );
  32  |     await login.verifyInvalidLogin();
  33  |     console.log('Invalid Login Verified');
  34  | });
  35  | 
  36  | 
  37  | test('TC03 - Logout Validation', async ({ page }) => {
  38  | 
  39  |     const login = new LoginPage(page);
  40  |     await login.gotoLoginPage();
  41  |     await login.login(
  42  |         loginData.validUser.username,
  43  |         loginData.validUser.password
  44  |     );
  45  |     await login.verifyLoginSuccess();
  46  |     await login.logout();
  47  |     console.log(' Logout Successful');
  48  | });
  49  | 
  50  | 
  51  | test('TC04 - Empty Credentials', async ({ page }) => {
  52  |     const login = new LoginPage(page);
  53  |     await login.gotoLoginPage();
  54  |     await login.login(loginData.emptyUser.username, loginData.emptyUser.password);
  55  |     await login.verifyInvalidLogin();
  56  |     console.log(' Empty Credential Validation Done');
  57  | });
  58  | 
  59  | 
  60  | test('TC05 - Session Validation', async ({ page }) => {
  61  |     const login = new LoginPage(page);
  62  |     await login.gotoLoginPage();
  63  |     await login.login(
  64  |         loginData.validUser.username,
  65  |         loginData.validUser.password
  66  |     );
  67  |     await login.verifyLoginSuccess();
  68  |     await page.reload();
  69  |     await expect(
  70  |         page.getByRole('heading', {
  71  |             name: 'Accounts Overview'
  72  |         })
  73  |     ).toBeVisible();
  74  |     console.log(' Session Persistence Verified');
  75  | });
  76  | 
  77  | 
  78  | 
  79  | test('TC06 - Invalid Password Login', async ({ page }) => {
  80  |     const login = new LoginPage(page);
  81  |     await login.gotoLoginPage();
  82  |     await login.login(
  83  |         loginData.invalidPasswordUser.username,
  84  |         loginData.invalidPasswordUser.password
  85  |     );
  86  |     await expect(page.locator('body')).toContainText(
  87  |         'Welcome John Smith'
  88  |     );
  89  |     console.log(
  90  |         ' Invalid Password Validation Done'
  91  |     );
  92  | });
  93  | 
  94  | 
  95  | test('TC07 - Password Masking Validation', async ({ page }) => {
  96  |     const login = new LoginPage(page);
  97  |     await login.gotoLoginPage();
  98  |     const passwordField =
  99  |         page.locator('input[name="password"]');
  100 |     await expect(passwordField)
  101 |         .toHaveAttribute('type', 'password');
  102 |     console.log(' Password Masking Verified');
  103 | });
  104 | 
  105 | 
  106 | test('TC08 - Multiple Login Attempts', async ({ page }) => {
  107 |     const login = new LoginPage(page);
  108 |     for (let i = 0; i < 3; i++) {
  109 |         await login.gotoLoginPage('https://parabank.parasoft.com/parabank/index.htm');
  110 |         await expect(
  111 |             page.locator('input[name="username"]')
> 112 |         ).toBeVisible();
      |           ^ Error: expect(locator).toBeVisible() failed
  113 |         await login.login(
  114 |             loginData.invalidUser.username,
  115 |             loginData.invalidUser.password
  116 |         );
  117 |         await login.verifyInvalidLogin();
  118 |     }
  119 |     console.log(' Multiple Login Attempts Tested');
  120 | });
  121 | 
  122 | 
  123 | test('TC09 - Browser Back Validation', async ({ page }) => {
  124 |     const login = new LoginPage(page);
  125 |     await login.gotoLoginPage();
  126 |     await login.login(
  127 |         loginData.validUser.username,
  128 |         loginData.validUser.password
  129 |     );
  130 |     await login.verifyLoginSuccess();
  131 |     await login.logout();
  132 |     await page.goBack();
  133 |     await expect(
  134 |         page.locator('body')
  135 |     ).toContainText('Accounts Overview');
  136 | 
  137 |     console.log(' Browser Back Validation Done');
  138 | });
  139 | 
  140 | 
  141 | test('TC10 - Remember Me Validation', async ({ page }) => {
  142 |     const login = new LoginPage(page);
  143 |     await login.gotoLoginPage();
  144 |     await login.login(
  145 |         loginData.validUser.username,
  146 |         loginData.validUser.password
  147 |     );
  148 |     await login.verifyLoginSuccess();
  149 |     await page.reload();
  150 |     await login.verifyLoginSuccess();
  151 |     console.log(' Remember Me Validation Done');
  152 | });
  153 | 
  154 | 
  155 | test('TC11 - Unauthorized Access Validation', async ({ page }) => {
  156 |     await page.goto(
  157 |         'https://parabank.parasoft.com/parabank/overview.htm'
  158 |     );
  159 |     await expect(
  160 |         page.locator('input[value="Log In"]')
  161 |     ).toBeVisible();
  162 |     console.log(' Unauthorized Access Validation Done');
  163 | });
  164 | 
  165 | 
  166 | test('TC12 - Concurrent Login Validation', async ({ browser }) => {
  167 |     const context1 = await browser.newContext();
  168 |     const page1 = await context1.newPage();
  169 |     const login1 = new LoginPage(page1);
  170 |     await login1.gotoLoginPage();
  171 |     await login1.login(
  172 |         loginData.validUser.username,
  173 |         loginData.validUser.password
  174 |     );
  175 |     await login1.verifyLoginSuccess();
  176 |     const context2 = await browser.newContext();
  177 |     const page2 = await context2.newPage();
  178 |     const login2 = new LoginPage(page2);
  179 |     await login2.gotoLoginPage();
  180 |     await login2.login(
  181 |         loginData.validUser.username,
  182 |         loginData.validUser.password
  183 |     );
  184 |     await login2.verifyLoginSuccess();
  185 |     console.log(' Concurrent Login Validation Done');
  186 | });
  187 | 
  188 | 
  189 | test('TC13 - Direct URL Access After Logout', async ({ page }) => {
  190 |     const login = new LoginPage(page);
  191 |     await login.gotoLoginPage();
  192 |     await login.login(
  193 |         loginData.validUser.username,
  194 |         loginData.validUser.password
  195 |     );
  196 | 
  197 |     await login.verifyLoginSuccess();
  198 |     await login.logout();
  199 |     await page.goto(
  200 |         'https://parabank.parasoft.com/parabank/overview.htm'
  201 |     );
  202 |     await expect(
  203 |         page.locator('input[value="Log In"]')
  204 |     ).toBeVisible();
  205 | 
  206 |     console.log(
  207 |         'Direct URL Access After Logout Validated'
  208 |     );
  209 | });
  210 | 
  211 | 
  212 | test('TC14 - Login Page Refresh Validation', async ({ page }) => {
```