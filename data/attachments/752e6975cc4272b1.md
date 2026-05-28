# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loanRequest\loanRequest.spec.js >> Loan Request Module >> TC14 - Workflow Validation
- Location: tests\loanRequest\loanRequest.spec.js:215:10

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#loanRequestApproved')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#loanRequestApproved')
    14 × locator resolved to <div id="loanRequestApproved">…</div>
       - unexpected value "hidden"

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
    - 'row "Loan Amount: $ 1000"':
      - 'cell "Loan Amount: $"'
      - cell "1000":
        - textbox: "1000"
      - cell
    - 'row "Down Payment: $ 200"':
      - 'cell "Down Payment: $"'
      - cell "200":
        - textbox: "200"
      - cell
    - 'row "From account #: 77169"':
      - 'cell "From account #:"'
      - cell "77169":
        - combobox:
          - option "77169" [selected]
          - option "77391"
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
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | class LoanRequestPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.loanRequestLink = page.locator('text=Request Loan');
  7  |         this.loanAmountInput =  page.locator('#amount');
  8  |         this.downPaymentInput =  page.locator('#downPayment');
  9  |         this.applyButton =page.locator( 'input[value="Apply Now"]');
  10 |         this.successMessage = page.locator('#loanRequestApproved');
  11 |         this.pageTitle =page.getByRole('heading', {name: 'Apply for a Loan'});
  12 |     }
  13 | 
  14 |     async gotoLoanRequestPage() {
  15 |         await this.loanRequestLink.click();
  16 |     }
  17 | 
  18 |     async applyLoan(data) {
  19 |         await this.gotoLoanRequestPage();
  20 |         await this.loanAmountInput.fill(data.loanAmount);
  21 |         await this.downPaymentInput.fill(
  22 |             data.downPayment
  23 |         );
  24 |         await this.applyButton.click();
  25 |     }
  26 | 
  27 |     async verifyLoanPageVisible() {
  28 |         await expect(this.pageTitle).toContainText('Apply for a Loan');
  29 |     }
  30 |     async verifyLoanApproved() {
  31 |         await expect(this.successMessage)
> 32 |             .toBeVisible();
     |              ^ Error: expect(locator).toBeVisible() failed
  33 |     }
  34 |     // SESSION VALIDATION
  35 |     async refreshPage() {
  36 |         await this.page.reload();
  37 |     }
  38 | }
  39 | export default LoanRequestPage;
```