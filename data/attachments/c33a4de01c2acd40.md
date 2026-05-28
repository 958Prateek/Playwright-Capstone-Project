# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loanRequest\loanRequest.spec.js >> Loan Request Module >> TC11 - Session Persistence Validation
- Location: tests\loanRequest\loanRequest.spec.js:167:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1.title')
Expected substring: "Apply for a Loan"
Error: strict mode violation: locator('h1.title') resolved to 3 elements:
    1) <h1 class="title">↵⇆⇆  Apply for a Loan↵⇆   </h1> aka getByRole('heading', { name: 'Apply for a Loan' })
    2) <h1 class="title">Loan Request Processed</h1> aka getByText('Loan Request Processed')
    3) <h1 class="title">↵⇆⇆⇆Error!↵⇆⇆</h1> aka getByText('Error!')

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h1.title')

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
        - heading "Apply for a Loan" [level=1] [ref=e51]
        - table [ref=e53]:
          - rowgroup [ref=e54]:
            - 'row "Loan Amount: $" [ref=e55]':
              - 'cell "Loan Amount: $" [ref=e56]'
              - cell [ref=e57]:
                - textbox [ref=e58]
              - cell [ref=e59]
            - 'row "Down Payment: $" [ref=e60]':
              - 'cell "Down Payment: $" [ref=e61]'
              - cell [ref=e62]:
                - textbox [ref=e63]
              - cell [ref=e64]
            - 'row "From account #: 63738" [ref=e65]':
              - 'cell "From account #:" [ref=e66]'
              - cell "63738" [ref=e67]:
                - combobox [ref=e68]:
                  - option "63738" [selected]
                  - option "63849"
              - cell [ref=e69]
            - row "Apply Now" [ref=e70]:
              - cell [ref=e71]
              - cell "Apply Now" [ref=e72]:
                - button "Apply Now" [ref=e73] [cursor=pointer]
  - generic [ref=e75]:
    - list [ref=e76]:
      - listitem [ref=e77]:
        - link "Home" [ref=e78] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e79]:
        - link "About Us" [ref=e80] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e81]:
        - link "Services" [ref=e82] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e83]:
        - link "Products" [ref=e84] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e85]:
        - link "Locations" [ref=e86] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e87]:
        - link "Forum" [ref=e88] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e89]:
        - link "Site Map" [ref=e90] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e91]:
        - link "Contact Us" [ref=e92] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e93]: © Parasoft. All rights reserved.
    - list [ref=e94]:
      - listitem [ref=e95]: "Visit us at:"
      - listitem [ref=e96]:
        - link "www.parasoft.com" [ref=e97] [cursor=pointer]:
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
  18 |             page.locator('h1.title');
  19 |     }
  20 | 
  21 | 
  22 |     // NAVIGATE TO LOAN PAGE
  23 | 
  24 |     async gotoLoanRequestPage() {
  25 | 
  26 |         await this.loanRequestLink.click();
  27 |     }
  28 | 
  29 | 
  30 |     // APPLY FOR LOAN
  31 | 
  32 |     async applyLoan(data) {
  33 | 
  34 |         await this.gotoLoanRequestPage();
  35 | 
  36 |         await this.loanAmountInput.fill(
  37 |             data.loanAmount
  38 |         );
  39 | 
  40 |         await this.downPaymentInput.fill(
  41 |             data.downPayment
  42 |         );
  43 | 
  44 |         await this.applyButton.click();
  45 |     }
  46 | 
  47 | 
  48 |     // ASSERTION
  49 | 
  50 |     async verifyLoanPageVisible() {
  51 | 
  52 |         await expect(this.pageTitle)
> 53 |             .toContainText(
     |              ^ Error: expect(locator).toContainText(expected) failed
  54 |                 'Apply for a Loan'
  55 |             );
  56 |     }
  57 | 
  58 | 
  59 |     // ASSERTION
  60 | 
  61 |     async verifyLoanApproved() {
  62 | 
  63 |         await expect(this.successMessage)
  64 |             .toBeVisible();
  65 |     }
  66 | 
  67 | 
  68 |     // SESSION VALIDATION
  69 | 
  70 |     async refreshPage() {
  71 |         await this.page.reload();
  72 |     }
  73 | }
  74 | export default LoanRequestPage;
```