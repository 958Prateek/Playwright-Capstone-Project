# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loanRequest\loanRequest.spec.js >> Loan Request Module >> TC06 - Loan Request Page Visibility
- Location: tests\loanRequest\loanRequest.spec.js:74:10

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('heading')
Expected substring: "Apply for a Loan"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('heading')

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
    - 'row "From account #: 67734"':
      - 'cell "From account #:"'
      - cell "67734":
        - combobox:
          - option "67734" [selected]
          - option "67845"
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
  3  | 
  4  | class LoanRequestPage {
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |         this.loanRequestLink = page.locator('text=Request Loan');
  8  |         this.loanAmountInput =  page.locator('#amount');
  9  |         this.downPaymentInput =  page.locator('#downPayment');
  10 |         this.applyButton =page.locator(
  11 |                 'input[value="Apply Now"]'
  12 |             );
  13 | 
  14 |         this.successMessage =
  15 |             page.locator('#loanRequestApproved');
  16 | 
  17 |         this.pageTitle =
  18 |             page.locator('heading', {name: 'Apply for a Loan'});
  19 |     }
  20 | 
  21 | 
  22 |     async gotoLoanRequestPage() {
  23 |         await this.loanRequestLink.click();
  24 |     }
  25 | 
  26 | 
  27 |     // APPLY FOR LOAN
  28 | 
  29 |     async applyLoan(data) {
  30 | 
  31 |         await this.gotoLoanRequestPage();
  32 | 
  33 |         await this.loanAmountInput.fill(
  34 |             data.loanAmount
  35 |         );
  36 | 
  37 |         await this.downPaymentInput.fill(
  38 |             data.downPayment
  39 |         );
  40 | 
  41 |         await this.applyButton.click();
  42 |     }
  43 | 
  44 | 
  45 |     // ASSERTION
  46 | 
  47 |     async verifyLoanPageVisible() {
  48 | 
  49 |         await expect(this.pageTitle)
> 50 |             .toContainText(
     |              ^ Error: expect(locator).toContainText(expected) failed
  51 |                 'Apply for a Loan'
  52 |             );
  53 |     }
  54 | 
  55 | 
  56 |     // ASSERTION
  57 | 
  58 |     async verifyLoanApproved() {
  59 | 
  60 |         await expect(this.successMessage)
  61 |             .toBeVisible();
  62 |     }
  63 | 
  64 | 
  65 |     // SESSION VALIDATION
  66 | 
  67 |     async refreshPage() {
  68 |         await this.page.reload();
  69 |     }
  70 | }
  71 | export default LoanRequestPage;
```