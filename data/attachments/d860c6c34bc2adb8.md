# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountOverview\accountOverview.spec.js >> Accounts Overview Module >> TC04 - Verify Multiple Accounts Display
- Location: tests\accountOverview\accountOverview.spec.js:53:9

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://parabank.parasoft.com/parabank/index.htm
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/index.htm", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | 
  3   | class RegisterPage {
  4   |     constructor(page) {
  5   |         this.page = page;
  6   |         this.registerLink =
  7   |             page.locator('text=Register');
  8   | 
  9   |         this.firstName =
  10  |             page.locator('#customer\\.firstName');
  11  | 
  12  |         this.lastName =
  13  |             page.locator('#customer\\.lastName');
  14  | 
  15  |         this.address =
  16  |             page.locator('#customer\\.address\\.street');
  17  | 
  18  |         this.city =
  19  |             page.locator('#customer\\.address\\.city');
  20  | 
  21  |         this.state =
  22  |             page.locator('#customer\\.address\\.state');
  23  | 
  24  |         this.zipCode =
  25  |             page.locator('#customer\\.address\\.zipCode');
  26  | 
  27  |         this.phone =
  28  |             page.locator('#customer\\.phoneNumber');
  29  | 
  30  |         this.ssn =
  31  |             page.locator('#customer\\.ssn');
  32  | 
  33  |         this.username =
  34  |             page.locator('#customer\\.username');
  35  | 
  36  |         this.password =
  37  |             page.locator('#customer\\.password');
  38  | 
  39  |         this.confirmPassword =
  40  |             page.locator('#repeatedPassword');
  41  | 
  42  |         this.registerButton =
  43  |             page.locator('input[value="Register"]');
  44  | 
  45  |         this.successMessage =
  46  |             page.locator('.title');
  47  |     }
  48  | 
  49  |     async gotoRegisterPage() {
> 50  |         await this.page.goto(
      |                         ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://parabank.parasoft.com/parabank/index.htm
  51  |             'https://parabank.parasoft.com/parabank/index.htm');
  52  |         await this.page.waitForLoadState('domcontentloaded');
  53  |         await this.registerLink.click();
  54  |     }
  55  | 
  56  |     async registerUser(user) {
  57  |         await this.page.waitForLoadState(
  58  |             'domcontentloaded'
  59  |         );
  60  |         await this.firstName.fill(user.firstName);
  61  |         await this.lastName.fill(user.lastName);
  62  |         await this.address.fill(user.address);
  63  |         await this.city.fill(user.city);
  64  |         await this.state.fill(user.state);
  65  |         await this.zipCode.fill(user.zipCode);
  66  |         await this.phone.fill(user.phone);
  67  |         await this.ssn.fill(user.ssn);
  68  |         await this.username.fill(user.username);
  69  |         await this.password.fill(user.password);
  70  |         await this.confirmPassword.fill(user.confirmpassword || user.password);
  71  |         await this.registerButton.click();
  72  |     }
  73  | 
  74  |     async verifyRegistration(username) {
  75  | 
  76  |         await expect(
  77  |             this.page.locator('body')
  78  |             // this.page.locator('#rightPanel')
  79  |         ).toContainText(
  80  |             // 'Your account was created successfully'
  81  |             // 'Welcome'
  82  |             username
  83  |         );
  84  | 
  85  |         await expect(
  86  |             this.page.locator('#rightPanel')
  87  |         ).toContainText(
  88  |             username
  89  |         );
  90  |     }
  91  | 
  92  | 
  93  |     // async verifyRegistrationSuccess(username) {
  94  |     //     await expect(
  95  |     //         this.page.locator('#rightPanel')
  96  |     //     ).toContainText(username);
  97  |     // }
  98  | }
  99  | 
  100 | export default RegisterPage;
```