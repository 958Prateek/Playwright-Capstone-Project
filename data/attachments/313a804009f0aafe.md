# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountOverview\accountOverview.spec.js >> Accounts Overview Module >> TC14 - Verify UI Elements
- Location: tests\accountOverview\accountOverview.spec.js:158:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Accounts Overview' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Accounts Overview' })

```

```yaml
- banner:
  - heading "Error 1015" [level=1]
  - text: "Ray ID: a01c8f8ef9fc6c5f • 2026-05-26 11:50:11 UTC"
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
  - strong: a01c8f8ef9fc6c5f
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing
```

# Test source

```ts
  65  | 
  66  |         // PARAM ASSERTION
  67  |         await expect(page)
  68  |             .toHaveURL(/activity.htm/);
  69  | 
  70  |         console.log(' Account Details Navigation Verified');
  71  |     });
  72  | 
  73  | 
  74  |     test('TC06 - Verify Dynamic Balance Validation', async ({ page }) => {
  75  |         const overview = new AccountOverviewPage(page);
  76  |         await overview.gotoAccountsOverview();
  77  |         const balance =
  78  |             await overview.accountBalances.first()
  79  |                 .textContent();
  80  | 
  81  |         // ASSERTION
  82  | 
  83  |         expect(balance).not.toBeNull();
  84  |         console.log(' Dynamic Balance Validation Done');
  85  |     });
  86  | 
  87  | 
  88  |     test('TC07 - Verify Account Table Visibility', async ({ page }) => {
  89  |         const overview = new AccountOverviewPage(page);
  90  |         await overview.gotoAccountsOverview();
  91  |         await overview.verifyAccountTableVisible();
  92  |         console.log(' Account Table Visible');
  93  |     });
  94  | 
  95  | 
  96  |     test('TC08 - Verify Transaction Link Visibility', async ({ page }) => {
  97  |         const overview = new AccountOverviewPage(page);
  98  |         await overview.gotoAccountsOverview();
  99  |         await overview.verifyTransactionLinksVisible();
  100 |         console.log(' Transaction Links Visible');
  101 |     });
  102 | 
  103 | 
  104 |     test('TC09 - Verify Accounts Overview URL', async ({ page }) => {
  105 |         const overview = new AccountOverviewPage(page);
  106 |         await overview.gotoAccountsOverview();
  107 | 
  108 |         // PARAM ASSERTION
  109 |         await expect(page)
  110 |             .toHaveURL(/overview.htm/);
  111 | 
  112 |         console.log(' Accounts Overview URL Verified');
  113 |     });
  114 | 
  115 | 
  116 |     test('TC10 - Verify Session Persistence', async ({ page }) => {
  117 |         const overview = new AccountOverviewPage(page);
  118 |         await overview.gotoAccountsOverview();
  119 |         await page.reload();
  120 |         await overview.verifyAccountsOverviewPage();
  121 |         console.log(' Session Persistence Verified');
  122 |     });
  123 | 
  124 | 
  125 |     test('TC11 - Verify Unauthorized Access', async ({ page }) => {
  126 |         await page.goto(
  127 |             'https://parabank.parasoft.com/parabank/overview.htm'
  128 |         );
  129 |         await expect(page.locator('body')
  130 |      ).toContainText(
  131 |           'Accounts Overview'
  132 |      );
  133 |         console.log(' Unauthorized Access Blocked');
  134 |     });
  135 | 
  136 | 
  137 |     test('TC12 - Verify Account Synchronization', async ({ page }) => {
  138 |         const overview =new AccountOverviewPage(page);
  139 |         await overview.gotoAccountsOverview();
  140 |         await overview.verifyMultipleAccounts();
  141 |         console.log(' Account Synchronization Verified');
  142 |     });
  143 | 
  144 | 
  145 |     test('TC13 - Verify Balance Format', async ({ page }) => {
  146 |         const overview = new AccountOverviewPage(page);
  147 |         await overview.gotoAccountsOverview();
  148 |         const balance =
  149 |             await overview.accountBalances.first()
  150 |                 .textContent();
  151 | 
  152 |         // ASSERTION
  153 |         expect(balance).toContain('$');
  154 |         console.log(' Balance Format Verified');
  155 |     });
  156 | 
  157 | 
  158 |     test('TC14 - Verify UI Elements', async ({ page }) => {
  159 |         const overview = new AccountOverviewPage(page);
  160 |         await overview.gotoAccountsOverview();
  161 | 
  162 |         // ASSERTIONS
  163 |         await expect(
  164 |             overview.pageTitle
> 165 |         ).toBeVisible();
      |           ^ Error: expect(locator).toBeVisible() failed
  166 | 
  167 |         await expect(
  168 |             overview.accountTable
  169 |         ).toBeVisible();
  170 | 
  171 |         console.log('UI Validation Done');
  172 |     });
  173 | 
  174 | 
  175 |     test('TC15 - Verify Account Overview Workflow', async ({ page }) => {
  176 |         const overview = new AccountOverviewPage(page);
  177 |         await overview.gotoAccountsOverview();
  178 |         await overview.verifyAccountsOverviewPage();
  179 |         await overview.verifyBalancesVisible();
  180 |         await overview.verifyAccountNumbersVisible();
  181 |         console.log(' Complete Workflow Validated');
  182 |     });
  183 | 
  184 | 
  185 |     // PARALLEL EXECUTION
  186 |     // Executes tests in parallel if enabled
  187 | 
  188 |     test.describe.configure({
  189 |         mode: 'parallel'
  190 |     });
  191 | });
```