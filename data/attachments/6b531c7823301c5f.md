# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: billPay\billPay.spec.js >> Bill Pay Module >> TC09 - Bill Payment Confirmation
- Location: tests\billPay\billPay.spec.js:90:9

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Signing up is easy!" [level=1] [ref=e45]
        - paragraph [ref=e46]: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
        - table [ref=e48]:
          - rowgroup [ref=e49]:
            - row "First Name:" [ref=e50]:
              - cell "First Name:" [ref=e51]
              - cell [ref=e52]:
                - textbox [ref=e53]
              - cell [ref=e54]
            - row "Last Name:" [ref=e55]:
              - cell "Last Name:" [ref=e56]
              - cell [ref=e57]:
                - textbox [ref=e58]
              - cell [ref=e59]
            - row "Address:" [ref=e60]:
              - cell "Address:" [ref=e61]
              - cell [ref=e62]:
                - textbox [ref=e63]
              - cell [ref=e64]
            - row "City:" [ref=e65]:
              - cell "City:" [ref=e66]
              - cell [ref=e67]:
                - textbox [ref=e68]
              - cell [ref=e69]
            - row "State:" [ref=e70]:
              - cell "State:" [ref=e71]
              - cell [ref=e72]:
                - textbox [ref=e73]
              - cell [ref=e74]
            - row "Zip Code:" [ref=e75]:
              - cell "Zip Code:" [ref=e76]
              - cell [ref=e77]:
                - textbox [ref=e78]
              - cell [ref=e79]
            - 'row "Phone #:" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell [ref=e82]:
                - textbox [ref=e83]
              - cell [ref=e84]
            - row "SSN:" [ref=e85]:
              - cell "SSN:" [ref=e86]
              - cell [ref=e87]:
                - textbox [ref=e88]
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - row "Username:" [ref=e92]:
              - cell "Username:" [ref=e93]
              - cell [ref=e94]:
                - textbox [ref=e95]
              - cell [ref=e96]
            - row "Password:" [ref=e97]:
              - cell "Password:" [ref=e98]
              - cell [ref=e99]:
                - textbox [ref=e100]
              - cell [ref=e101]
            - row "Confirm:" [ref=e102]:
              - cell "Confirm:" [ref=e103]
              - cell [ref=e104]:
                - textbox [ref=e105]
              - cell [ref=e106]
            - row "Register" [ref=e107]:
              - cell [ref=e108]
              - cell "Register" [ref=e109]:
                - button "Register" [ref=e110] [cursor=pointer]
  - generic [ref=e112]:
    - list [ref=e113]:
      - listitem [ref=e114]:
        - link "Home" [ref=e115] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e116]:
        - link "About Us" [ref=e117] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e118]:
        - link "Services" [ref=e119] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e120]:
        - link "Products" [ref=e121] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e122]:
        - link "Locations" [ref=e123] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e124]:
        - link "Forum" [ref=e125] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e126]:
        - link "Site Map" [ref=e127] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e128]:
        - link "Contact Us" [ref=e129] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e130]: © Parasoft. All rights reserved.
    - list [ref=e131]:
      - listitem [ref=e132]: "Visit us at:"
      - listitem [ref=e133]:
        - link "www.parasoft.com" [ref=e134] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | class RegisterPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.registerLink =
  7  |             page.locator('text=Register');
  8  | 
  9  |         this.firstName =
  10 |             page.locator('#customer\\.firstName');
  11 | 
  12 |         this.lastName =
  13 |             page.locator('#customer\\.lastName');
  14 | 
  15 |         this.address =
  16 |             page.locator('#customer\\.address\\.street');
  17 | 
  18 |         this.city =
  19 |             page.locator('#customer\\.address\\.city');
  20 | 
  21 |         this.state =
  22 |             page.locator('#customer\\.address\\.state');
  23 | 
  24 |         this.zipCode =
  25 |             page.locator('#customer\\.address\\.zipCode');
  26 | 
  27 |         this.phone =
  28 |             page.locator('#customer\\.phoneNumber');
  29 | 
  30 |         this.ssn =
  31 |             page.locator('#customer\\.ssn');
  32 | 
  33 |         this.username =
  34 |             page.locator('#customer\\.username');
  35 | 
  36 |         this.password =
  37 |             page.locator('#customer\\.password');
  38 | 
  39 |         this.confirmPassword =
  40 |             page.locator('#repeatedPassword');
  41 | 
  42 |         this.registerButton =
  43 |             page.locator('input[value="Register"]');
  44 | 
  45 |         this.successMessage =
  46 |             page.locator('.title');
  47 |     }
  48 | 
  49 |     async gotoRegisterPage() {
  50 |         await this.page.goto(
  51 |             'https://parabank.parasoft.com/parabank/index.htm');
  52 |         await this.page.waitForLoadState('domcontentloaded');
  53 |         await this.registerLink.click();
  54 |     }
  55 | 
  56 |     async registerUser(user) {
  57 |         await this.page.waitForLoadState(
  58 |             'domcontentloaded'
  59 |         );
> 60 |         await this.firstName.fill(user.firstName);
     |                              ^ Error: locator.fill: value: expected string, got undefined
  61 |         await this.lastName.fill(user.lastName);
  62 |         await this.address.fill(user.address);
  63 |         await this.city.fill(user.city);
  64 |         await this.state.fill(user.state);
  65 |         await this.zipCode.fill(user.zipCode);
  66 |         await this.phone.fill(user.phone);
  67 |         await this.ssn.fill(user.ssn);
  68 |         await this.username.fill(user.username);
  69 |         await this.password.fill(user.password);
  70 |         await this.confirmPassword.fill(user.password);
  71 |         await this.registerButton.click();
  72 |     }
  73 | 
  74 |     async verifyRegistration(username) {
  75 | 
  76 |         await expect(
  77 |             this.page.locator('#rightPanel')
  78 |         ).toContainText(
  79 |             // 'Your account was created successfully'
  80 |             'Welcome'
  81 |         );
  82 | 
  83 |         await expect(
  84 |             this.page.locator('#rightPanel')
  85 |         ).toContainText(
  86 |             username
  87 |         );
  88 |     }
  89 | 
  90 | 
  91 |     // async verifyRegistrationSuccess(username) {
  92 |     //     await expect(
  93 |     //         this.page.locator('#rightPanel')
  94 |     //     ).toContainText(username);
  95 |     // }
  96 | }
  97 | 
  98 | export default RegisterPage;
```