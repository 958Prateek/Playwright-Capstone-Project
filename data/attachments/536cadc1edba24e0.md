# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findTransactions/findTransactions.spec.js >> Find Transactions Module >> TC11 - Date Field Visibility
- Location: tests/findTransactions/findTransactions.spec.js:109:10

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#transactionDate')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#transactionDate')

```

```yaml
- banner:
  - heading "Error 1015" [level=1]
  - text: "Ray ID: a055c90e1bd5f4d9 • 2026-06-02 10:30:54 UTC"
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
  - strong: a055c90e1bd5f4d9
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing
```

# Test source

```ts
  17  |           const transfer = new TransferFundsPage(page);
  18  |           user = {
  19  |                ...registerData.validUser,
  20  | 
  21  |                city: 'Pune',
  22  | 
  23  |                username: 'user_' + Date.now()
  24  |           };
  25  |           await register.gotoRegisterPage();
  26  |           await register.registerUser(user);
  27  |           await register.verifyRegistration(user.username);
  28  |           await openAccount.openNewAccount('1');
  29  |           await openAccount.openNewAccount('0');
  30  |           await transfer.transferFunds(transferData.validTransfer.amount);
  31  |      });
  32  | 
  33  | 
  34  |      test('TC01 - Search By Valid Transaction ID', async ({ page }) => {
  35  |           const find = new FindTransactionsPage(page);
  36  |           await find.searchByTransactionId(
  37  |                findData.validTransactionId.transactionId
  38  |           );
  39  |           console.log(' Valid Transaction ID Search Successful');
  40  |      });
  41  | 
  42  | 
  43  |      test('TC02 - Invalid Transaction ID', async ({ page }) => {
  44  |           const find = new FindTransactionsPage(page);
  45  |           await find.searchByTransactionId( findData.invalidTransactionId.transactionId);
  46  |           console.log(' Invalid Transaction ID Validation Done');
  47  |      });
  48  | 
  49  | 
  50  |      test('TC03 - Search By Date', async ({ page }) => {
  51  |           const find = new FindTransactionsPage(page);
  52  |           await find.searchByDate(findData.dateSearch.date);
  53  |           console.log(' Search By Date Successful');
  54  |      });
  55  | 
  56  | 
  57  |      test('TC04 - Invalid Date Format', async ({ page }) => {
  58  |           const find = new FindTransactionsPage(page);
  59  |           await find.searchByDate(findData.invalidDate.date);
  60  |           console.log(' Invalid Date Validation Done');
  61  |      });
  62  | 
  63  |      test('TC05 - Search By Amount', async ({ page }) => {
  64  |           const find = new FindTransactionsPage(page);
  65  |           await find.searchByAmount(findData.amountSearch.amount);
  66  |           console.log(' Search By Amount Successful');
  67  |      });
  68  | 
  69  |      test('TC06 - Invalid Amount', async ({ page }) => {
  70  |           const find =  new FindTransactionsPage(page);
  71  |           await find.searchByAmount( findData.invalidAmount.amount);
  72  |           console.log(' Invalid Amount Validation Done');
  73  |      });
  74  | 
  75  | 
  76  |      test('TC07 - Empty Transaction Search', async ({ page }) => {
  77  |           const find =  new FindTransactionsPage(page);
  78  |           await find.searchByAmount(
  79  |                findData.emptySearch.value
  80  |           );
  81  |           console.log(' Empty Search Validation Done');
  82  |      });
  83  | 
  84  | 
  85  |      test('TC08 - Find Transactions Page Visibility', async ({ page }) => {
  86  |           const find = new FindTransactionsPage(page);
  87  |           await find.gotoFindTransactionsPage();
  88  |           await find.verifyFindTransactionsPageVisible();
  89  |           console.log( ' Find Transactions Page Visible');
  90  |      });
  91  | 
  92  | 
  93  |      test('TC09 - Transaction ID Field Visibility', async ({ page }) => {
  94  |           const find = new FindTransactionsPage(page);
  95  |           await find.gotoFindTransactionsPage();
  96  |           await expect( find.transactionIdInput).toBeVisible();
  97  |           console.log(' Transaction ID Field Visible');
  98  |      });
  99  | 
  100 | 
  101 |      test('TC10 - Amount Field Visibility', async ({ page }) => {
  102 |           const find = new FindTransactionsPage(page);
  103 |           await find.gotoFindTransactionsPage();
  104 |           await expect(find.amountInput).toBeVisible();
  105 |           console.log(' Amount Field Visible');
  106 |      });
  107 | 
  108 | 
  109 |      test('TC11 - Date Field Visibility', async ({ page }) => {
  110 | 
  111 |           const find =
  112 |                new FindTransactionsPage(page);
  113 | 
  114 |           await find.gotoFindTransactionsPage();
  115 |           await expect(
  116 |                find.dateInput
> 117 |           ).toBeVisible();
      |             ^ Error: expect(locator).toBeVisible() failed
  118 | 
  119 |           console.log(
  120 |                ' Date Field Visible'
  121 |           );
  122 |      });
  123 | 
  124 |      test('TC12 - Find Transaction Button Visibility', async ({ page }) => {
  125 |           const find = new FindTransactionsPage(page);
  126 |           await find.gotoFindTransactionsPage();
  127 |           await expect(
  128 |                find.findByAmountButton
  129 |           ).toBeVisible();
  130 |           console.log('Find Transaction Button Visible');
  131 |      });
  132 | 
  133 |      test('TC13 - Session Persistence Validation', async ({ page }) => {
  134 |           const find = new FindTransactionsPage(page);
  135 |           await find.gotoFindTransactionsPage();
  136 | 
  137 |           // SESSION VALIDATION
  138 |           await find.refreshPage();
  139 |           await find.verifyFindTransactionsPageVisible();
  140 |           console.log(' Session Persistence Verified');
  141 |      });
  142 | 
  143 | 
  144 |      // TC14
  145 | 
  146 |      test('TC14 - Unauthorized Access Validation', async ({ page }) => {
  147 |           await page.goto('https://parabank.parasoft.com/parabank/logout.htm');
  148 |           await page.goto('https://parabank.parasoft.com/parabank/findtrans.htm');
  149 | 
  150 |           await expect(
  151 |                page.locator('input[value="Log In"]')
  152 |           ).toBeVisible();
  153 |           console.log( ' Unauthorized Access Blocked');
  154 |      });
  155 | 
  156 | 
  157 |      test('TC15 - UI Validation', async ({ page }) => {
  158 |           const find = new FindTransactionsPage(page);
  159 |           await find.gotoFindTransactionsPage();
  160 |           await expect(find.amountInput).toBeVisible();
  161 |           await expect(find.findByAmountButton).toBeVisible();
  162 |           console.log(' UI Validation Done');
  163 |      });
  164 | 
  165 |      test('TC16 - Date Range Fields Visibility', async ({ page }) => {
  166 |           const find = new FindTransactionsPage(page);
  167 |           await find.gotoFindTransactionsPage();
  168 |           await expect(find.fromDateInput).toBeVisible();
  169 |           await expect(find.toDateInput).toBeVisible();
  170 |           console.log(' Date Range Fields Visible');
  171 |      });
  172 | 
  173 | 
  174 |      // PARALLEL EXECUTION
  175 | 
  176 |      test.describe.configure({
  177 |           mode: 'default'
  178 |      });
  179 | });
```