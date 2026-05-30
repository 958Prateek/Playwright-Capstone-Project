# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registration\registration.spec.js >> Registration Module >> TC02 - Duplicate Username
- Location: tests\registration\registration.spec.js:26:10

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('text=Register')

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
      - generic [ref=e48]:
        - list [ref=e50]:
          - listitem [ref=e51]: ATM Services
          - listitem [ref=e52]:
            - link "Withdraw Funds" [ref=e53] [cursor=pointer]:
              - /url: services/ParaBank?wsdl
          - listitem [ref=e54]:
            - link "Transfer Funds" [ref=e55] [cursor=pointer]:
              - /url: services/ParaBank?wsdl
          - listitem [ref=e56]:
            - link "Check Balances" [ref=e57] [cursor=pointer]:
              - /url: services/ParaBank?wsdl
          - listitem [ref=e58]:
            - link "Make Deposits" [ref=e59] [cursor=pointer]:
              - /url: services/ParaBank?wsdl
        - list [ref=e60]:
          - listitem [ref=e61]: Online Services
          - listitem [ref=e62]:
            - link "Bill Pay" [ref=e63] [cursor=pointer]:
              - /url: services/bank?_wadl&_type=xml
          - listitem [ref=e64]:
            - link "Account History" [ref=e65] [cursor=pointer]:
              - /url: services/bank?_wadl&_type=xml
          - listitem [ref=e66]:
            - link "Transfer Funds" [ref=e67] [cursor=pointer]:
              - /url: services/bank?_wadl&_type=xml
        - paragraph [ref=e68]:
          - link "Read More" [ref=e69] [cursor=pointer]:
            - /url: services.htm
        - heading "Latest News" [level=4] [ref=e70]
        - list [ref=e71]:
          - listitem [ref=e72]: 05/25/2026
          - listitem [ref=e73]:
            - link "ParaBank Is Now Re-Opened" [ref=e74] [cursor=pointer]:
              - /url: news.htm#6
          - listitem [ref=e75]:
            - link "New! Online Bill Pay" [ref=e76] [cursor=pointer]:
              - /url: news.htm#5
          - listitem [ref=e77]:
            - link "New! Online Account Transfers" [ref=e78] [cursor=pointer]:
              - /url: news.htm#4
        - paragraph [ref=e79]:
          - link "Read More" [ref=e80] [cursor=pointer]:
            - /url: news.htm
  - generic [ref=e82]:
    - list [ref=e83]:
      - listitem [ref=e84]:
        - link "Home" [ref=e85] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e86]:
        - link "About Us" [ref=e87] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e88]:
        - link "Services" [ref=e89] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e90]:
        - link "Products" [ref=e91] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e92]:
        - link "Locations" [ref=e93] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e94]:
        - link "Forum" [ref=e95] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e96]:
        - link "Site Map" [ref=e97] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e98]:
        - link "Contact Us" [ref=e99] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e100]: © Parasoft. All rights reserved.
    - list [ref=e101]:
      - listitem [ref=e102]: "Visit us at:"
      - listitem [ref=e103]:
        - link "www.parasoft.com" [ref=e104] [cursor=pointer]:
          - /url: http://www.parasoft.com/
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
  50  | 
  51  |         await this.page.goto(
  52  |             'https://parabank.parasoft.com/parabank/index.htm'
  53  |         );
  54  |         await this.page.waitForLoadState('domcontentloaded');
  55  | 
> 56  |         await this.registerLink.click();
      |                                 ^ Error: locator.click: Test timeout of 60000ms exceeded.
  57  |     }
  58  | 
  59  |     async registerUser(user) {
  60  |         await this.page.waitForLoadState(
  61  |             'domcontentloaded'
  62  |         );
  63  |         await this.firstName.fill(user.firstName);
  64  |         await this.lastName.fill(user.lastName);
  65  |         await this.address.fill(user.address);
  66  |         await this.city.fill(user.city);
  67  |         await this.state.fill(user.state);
  68  |         await this.zipCode.fill(user.zipCode);
  69  |         await this.phone.fill(user.phone);
  70  |         await this.ssn.fill(user.ssn);
  71  |         await this.username.fill(user.username);
  72  |         await this.password.fill(user.password);
  73  |         await this.confirmPassword.fill(user.password);
  74  |         await this.registerButton.click();
  75  |     }
  76  | 
  77  |     async verifyRegistration(username) {
  78  | 
  79  |         await expect(
  80  |             this.page.locator('#rightPanel')
  81  |         ).toContainText(
  82  |             // 'Your account was created successfully'
  83  |             'Welcome'
  84  |         );
  85  | 
  86  |         await expect(
  87  |             this.page.locator('#rightPanel')
  88  |         ).toContainText(
  89  |             username
  90  |         );
  91  |     }
  92  | 
  93  | 
  94  |     // async verifyRegistrationSuccess(username) {
  95  |     //     await expect(
  96  |     //         this.page.locator('#rightPanel')
  97  |     //     ).toContainText(username);
  98  |     // }
  99  | }
  100 | 
  101 | export default RegisterPage;
```