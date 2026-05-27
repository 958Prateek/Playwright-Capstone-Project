# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loanRequest\loanRequest.spec.js >> Loan Request Module >> TC12 - Unauthorized Access Validation
- Location: tests\loanRequest\loanRequest.spec.js:186:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[value="Log In"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('input[value="Log In"]')

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
- paragraph: Welcome Prateek Chaturvedi
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
- heading "Apply for a Loan" [level=1]
- table:
  - rowgroup:
    - 'row "Loan Amount: $"':
      - 'cell "Loan Amount: $"'
      - cell:
        - textbox
      - cell
    - 'row "Down Payment: $"':
      - 'cell "Down Payment: $"'
      - cell:
        - textbox
      - cell
    - 'row "From account #: 63960"':
      - 'cell "From account #:"'
      - cell "63960":
        - combobox:
          - option "63960" [selected]
          - option "64071"
      - cell
    - row "Apply Now":
      - cell
      - cell "Apply Now":
        - button "Apply Now"
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
  94  |             new LoanRequestPage(page);
  95  | 
  96  |         await loan.gotoLoanRequestPage();
  97  | 
  98  |         await expect(
  99  |             loan.loanAmountInput
  100 |         ).toBeVisible();
  101 | 
  102 |         console.log(
  103 |             '✅ Loan Amount Field Visible'
  104 |         );
  105 |     });
  106 | 
  107 | 
  108 |     // TC08
  109 | 
  110 |     test('TC08 - Down Payment Field Visibility', async ({ page }) => {
  111 | 
  112 |         const loan =
  113 |             new LoanRequestPage(page);
  114 | 
  115 |         await loan.gotoLoanRequestPage();
  116 | 
  117 |         await expect(
  118 |             loan.downPaymentInput
  119 |         ).toBeVisible();
  120 | 
  121 |         console.log(
  122 |             '✅ Down Payment Field Visible'
  123 |         );
  124 |     });
  125 | 
  126 | 
  127 |     // TC09
  128 | 
  129 |     test('TC09 - Apply Button Visibility', async ({ page }) => {
  130 | 
  131 |         const loan =
  132 |             new LoanRequestPage(page);
  133 | 
  134 |         await loan.gotoLoanRequestPage();
  135 | 
  136 |         await expect(
  137 |             loan.applyButton
  138 |         ).toBeVisible();
  139 | 
  140 |         console.log(
  141 |             '✅ Apply Button Visible'
  142 |         );
  143 |     });
  144 | 
  145 | 
  146 |     // TC10
  147 | 
  148 |     test('TC10 - Loan Approval Validation', async ({ page }) => {
  149 | 
  150 |         const loan =
  151 |             new LoanRequestPage(page);
  152 | 
  153 |         await loan.applyLoan(
  154 |             loanData.validLoan
  155 |         );
  156 | 
  157 |         await loan.verifyLoanApproved();
  158 | 
  159 |         console.log(
  160 |             '✅ Loan Approval Verified'
  161 |         );
  162 |     });
  163 | 
  164 | 
  165 |     // TC11
  166 | 
  167 |     test('TC11 - Session Persistence Validation', async ({ page }) => {
  168 | 
  169 |         const loan =
  170 |             new LoanRequestPage(page);
  171 | 
  172 |         await loan.gotoLoanRequestPage();
  173 | 
  174 |         await loan.refreshPage();
  175 | 
  176 |         await loan.verifyLoanPageVisible();
  177 | 
  178 |         console.log(
  179 |             '✅ Session Persistence Verified'
  180 |         );
  181 |     });
  182 | 
  183 | 
  184 |     // TC12
  185 | 
  186 |     test('TC12 - Unauthorized Access Validation', async ({ page }) => {
  187 | 
  188 |         await page.goto(
  189 |             'https://parabank.parasoft.com/parabank/requestloan.htm'
  190 |         );
  191 | 
  192 |         await expect(
  193 |             page.locator('input[value="Log In"]')
> 194 |         ).toBeVisible();
      |           ^ Error: expect(locator).toBeVisible() failed
  195 | 
  196 |         console.log(
  197 |             '✅ Unauthorized Access Blocked'
  198 |         );
  199 |     });
  200 | 
  201 | 
  202 |     // TC13
  203 | 
  204 |     test('TC13 - UI Validation', async ({ page }) => {
  205 | 
  206 |         const loan =
  207 |             new LoanRequestPage(page);
  208 | 
  209 |         await loan.gotoLoanRequestPage();
  210 | 
  211 |         await expect(
  212 |             loan.loanAmountInput
  213 |         ).toBeVisible();
  214 | 
  215 |         await expect(
  216 |             loan.applyButton
  217 |         ).toBeVisible();
  218 | 
  219 |         console.log(
  220 |             '✅ UI Validation Done'
  221 |         );
  222 |     });
  223 | 
  224 | 
  225 |     // TC14
  226 | 
  227 |     test('TC14 - Workflow Validation', async ({ page }) => {
  228 | 
  229 |         const loan =
  230 |             new LoanRequestPage(page);
  231 | 
  232 |         await loan.applyLoan(
  233 |             loanData.validLoan
  234 |         );
  235 | 
  236 |         await loan.verifyLoanApproved();
  237 | 
  238 |         console.log(
  239 |             '✅ Workflow Validation Done'
  240 |         );
  241 |     });
  242 | 
  243 | 
  244 |     // TC15
  245 | 
  246 |     test('TC15 - Loan Request URL Validation', async ({ page }) => {
  247 | 
  248 |         const loan =
  249 |             new LoanRequestPage(page);
  250 | 
  251 |         await loan.gotoLoanRequestPage();
  252 | 
  253 |         await expect(page)
  254 |             .toHaveURL(/requestloan.htm/);
  255 | 
  256 |         console.log(
  257 |             '✅ Loan Request URL Verified'
  258 |         );
  259 |     });
  260 | 
  261 | 
  262 |     // PARALLEL EXECUTION
  263 | 
  264 |     test.describe.configure({
  265 |         mode: 'parallel'
  266 |     });
  267 | 
  268 | });
```