# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loanRequest/loanRequest.spec.js >> Loan Request Module >> TC02 - Invalid Loan Amount
- Location: tests/loanRequest/loanRequest.spec.js:35:10

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.fill: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('#amount')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - heading "Error 1015" [level=1] [ref=e5]
    - generic [ref=e6]: "Ray ID: a0598e59b93edad8 •"
    - generic [ref=e7]: 2026-06-02 21:29:52 UTC
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
      - strong [ref=e22]: a0598e59b93edad8
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
  3  | class LoanRequestPage {
  4  |      constructor(page) {
  5  |           this.page = page;
  6  |           this.loanRequestLink = page.locator('text=Request Loan');
  7  |           this.loanAmountInput = page.locator('#amount');
  8  |           this.downPaymentInput = page.locator('#downPayment');
  9  |           this.applyButton = page.locator('input[value="Apply Now"]');
  10 |           this.successMessage = page.locator('#loanRequestApproved');
  11 |           this.pageTitle = page.getByRole('heading', { name: 'Apply for a Loan' });
  12 |      }
  13 | 
  14 |      async gotoLoanRequestPage() {
  15 |           await this.loanRequestLink.click();
  16 |      }
  17 | 
  18 |      async applyLoan(data) {
  19 |           await this.gotoLoanRequestPage();
> 20 |           await this.loanAmountInput.fill(data.loanAmount);
     |                                      ^ Error: locator.fill: Test timeout of 120000ms exceeded.
  21 |           await this.downPaymentInput.fill(
  22 |                data.downPayment
  23 |           );
  24 |           await this.applyButton.click();
  25 |      }
  26 | 
  27 |      async verifyLoanPageVisible() {
  28 |           await expect(this.pageTitle).toContainText('Apply for a Loan');
  29 |      }
  30 |      async verifyLoanApproved() {
  31 |           await expect(
  32 |                this.page.locator('body')
  33 |           ).toContainText(
  34 |                'Loan Request Processed'
  35 |           );
  36 |      }
  37 |      // SESSION VALIDATION
  38 |      async refreshPage() {
  39 |           await this.page.reload();
  40 |      }
  41 | }
  42 | export default LoanRequestPage;
```