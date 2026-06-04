# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findTransactions/findTransactions.spec.js >> Find Transactions Module >> TC06 - Invalid Amount
- Location: tests/findTransactions/findTransactions.spec.js:69:10

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
    - generic [ref=e6]: "Ray ID: a065f5309aa1cbac •"
    - generic [ref=e7]: 2026-06-04 09:37:14 UTC
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
      - strong [ref=e22]: a065f5309aa1cbac
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
  1   | import { expect } from '@playwright/test';
  2   | 
  3   | // POM CLASS
  4   | // Find Transactions Module
  5   | 
  6   | class FindTransactionsPage {
  7   | 
  8   |      constructor(page) {
  9   | 
  10  |           this.page = page;
  11  |           this.findTransactionsLink =
  12  |                page.getByRole(
  13  |                     'link', { name: 'Find Transactions' }
  14  |                );
  15  |           this.amountInput =
  16  |                page.locator('#amount');
  17  | 
  18  |           this.findByAmountButton =
  19  |                page.locator(
  20  |                     'button:has-text("Find Transactions")'
  21  |                ).nth(2);
  22  | 
  23  |           this.dateInput =
  24  |                page.locator('#transactionDate');
  25  | 
  26  |           this.findByDateButton =
  27  |                page.locator(
  28  |                     'button:has-text("Find Transactions")'
  29  |                ).nth(0);
  30  | 
  31  |           this.fromDateInput =
  32  |                page.locator('#fromDate');
  33  | 
  34  |           this.toDateInput =
  35  |                page.locator('#toDate');
  36  | 
  37  |           this.findByDateRangeButton =
  38  |                page.locator(
  39  |                     'button:has-text("Find Transactions")'
  40  |                ).nth(1);
  41  | 
  42  |           this.transactionIdInput =
  43  |                page.locator('#transactionId');
  44  | 
  45  |           this.findByIdButton =
  46  |                page.locator(
  47  |                     'button:has-text("Find Transactions")'
  48  |                ).nth(3);
  49  | 
  50  |           this.pageTitle =
  51  |                page.getByRole('heading', { name: 'Find Transactions' });
  52  | 
  53  |           this.resultTable =
  54  |                page.locator('#transactionTable');
  55  |      }
  56  | 
  57  | 
  58  |      // NAVIGATE TO FIND TRANSACTIONS PAGE
  59  | 
  60  |      async gotoFindTransactionsPage() {
  61  |           await this.findTransactionsLink.click();
  62  |      }
  63  | 
  64  |      async searchByAmount(amount) {
  65  |           await this.gotoFindTransactionsPage();
> 66  |           await this.amountInput.fill(amount);
      |                                  ^ Error: locator.fill: Test timeout of 120000ms exceeded.
  67  |           await this.findByAmountButton.click();
  68  |      }
  69  | 
  70  | 
  71  |      async searchByDate(date) {
  72  | 
  73  |           await this.gotoFindTransactionsPage();
  74  | 
  75  |           await this.dateInput.fill(date);
  76  | 
  77  |           await this.findByDateButton.click();
  78  |      }
  79  | 
  80  |      async searchByDateRange(fromDate, toDate) {
  81  |           await this.gotoFindTransactionsPage();
  82  |           await this.fromDateInput.fill(fromDate);
  83  |           await this.toDateInput.fill(toDate);
  84  |           await this.findByDateRangeButton.click();
  85  |      }
  86  | 
  87  | 
  88  |      async searchByTransactionId(id) {
  89  |           await this.gotoFindTransactionsPage();
  90  |           await this.transactionIdInput.fill(id);
  91  |           await this.findByIdButton.click();
  92  |      }
  93  | 
  94  |      async verifyFindTransactionsPageVisible() {
  95  |           await expect(this.pageTitle)
  96  |                .toContainText(
  97  |                     'Find Transactions'
  98  |                );
  99  |      }
  100 | 
  101 |      async verifyResultsVisible() {
  102 |           await expect(this.resultTable)
  103 |                .toBeVisible();
  104 |      }
  105 | 
  106 |      // SESSION VALIDATION
  107 |      async refreshPage() {
  108 | 
  109 |           await this.page.reload();
  110 |      }
  111 | }
  112 | export default FindTransactionsPage;
```