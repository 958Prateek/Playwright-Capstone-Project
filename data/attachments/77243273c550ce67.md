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

Locator: locator('h1')
Expected: visible
Error: strict mode violation: locator('h1') resolved to 2 elements:
    1) <h1 class="title">↵⇆⇆⇆Accounts Overview↵⇆⇆</h1> aka getByRole('heading', { name: 'Accounts Overview' })
    2) <h1 class="title">↵⇆⇆⇆Error!↵⇆⇆</h1> aka getByText('Error!')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h1')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome Prateek Chaturvedi
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Accounts Overview" [level=1] [ref=e51]
        - table [ref=e52]:
          - rowgroup [ref=e53]:
            - row "Account Balance* Available Amount" [ref=e54]:
              - columnheader "Account" [ref=e55]
              - columnheader "Balance*" [ref=e56]
              - columnheader "Available Amount" [ref=e57]
          - rowgroup [ref=e58]:
            - row "16896 $5067890100500.00 $5067890100500.00" [ref=e59]:
              - cell "16896" [ref=e60]:
                - link "16896" [ref=e61] [cursor=pointer]:
                  - /url: activity.htm?id=16896
              - cell "$5067890100500.00" [ref=e62]
              - cell "$5067890100500.00" [ref=e63]
            - row "17007 $100.00 $100.00" [ref=e64]:
              - cell "17007" [ref=e65]:
                - link "17007" [ref=e66] [cursor=pointer]:
                  - /url: activity.htm?id=17007
              - cell "$100.00" [ref=e67]
              - cell "$100.00" [ref=e68]
            - row "Total $5067890100600.00" [ref=e69]:
              - cell "Total" [ref=e70]
              - cell "$5067890100600.00" [ref=e71]
              - cell [ref=e72]
          - rowgroup [ref=e73]:
            - row "*Balance includes deposits that may be subject to holds" [ref=e74]:
              - cell "*Balance includes deposits that may be subject to holds" [ref=e75]
  - generic [ref=e77]:
    - list [ref=e78]:
      - listitem [ref=e79]:
        - link "Home" [ref=e80] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e81]:
        - link "About Us" [ref=e82] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e83]:
        - link "Services" [ref=e84] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e85]:
        - link "Products" [ref=e86] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e87]:
        - link "Locations" [ref=e88] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e89]:
        - link "Forum" [ref=e90] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e91]:
        - link "Site Map" [ref=e92] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e93]:
        - link "Contact Us" [ref=e94] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e95]: © Parasoft. All rights reserved.
    - list [ref=e96]:
      - listitem [ref=e97]: "Visit us at:"
      - listitem [ref=e98]:
        - link "www.parasoft.com" [ref=e99] [cursor=pointer]:
          - /url: http://www.parasoft.com/
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