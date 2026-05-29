# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\authentication.spec.js >> TC06 - Invalid Password Login
- Location: tests\authentication\authentication.spec.js:75:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Timeout: 5000ms
- Expected substring  -   1
+ Received string     + 131

- The username and password could not be verified
+
+ 		
+ 			
+ 				
+ 				
+ 					
+
+
+
+
+   
+   
+   Experience the difference
+
+
+   
+
+
+
+   Solutions
+   About Us
+   Services
+   Products
+   Locations
+   Admin Page
+   
+
+   
+
+
+
+   home
+   about
+   contact
+
+
+ 				
+ 			
+ 			
+ 				
+ 					
+ 						
+ 						
+ 							
+
+
+ Welcome John Smith
+
+ Account Services
+
+
+
+
+   Open New Account
+   Accounts Overview
+   Transfer Funds
+   Bill Pay
+   Find Transactions
+   Update Contact Info
+   Request Loan
+   Log Out
+
+ 						
+ 					
+ 				
+ 				
+ 					
+
+
+
+ 	
+ 		
+ 			Accounts Overview
+ 		
+ 		
+ 			
+ 				
+ 					Account
+ 					Balance*
+ 					Available Amount
+ 				
+ 			
+ 			12345-$5152.07$0.0012456$412.52$412.5212567$100.00$100.0012678-$100.00$0.0012789$100.00$100.0012900$0.00$0.0013011$100.00$100.0013122$1100.00$1100.0013233$100.00$100.0013344$1131.10$1131.1014232$100.00$100.0014454$100.00$100.0015786$100.00$100.0016896$0.00$0.0017895$100.00$100.0018006$100.00$100.0022557$100.00$100.0044757$100.00$100.0044868$100.00$100.0044979$100.00$100.0045090$100.00$100.0045201$100.00$100.0045312$100.00$100.0045423$100.00$100.0045534$100.00$100.0045645$100.00$100.0045756$100.00$100.0046755$100.00$100.0046866$100.00$100.0046977$100.00$100.0047088$100.00$100.0047199$100.00$100.0047310$100.00$100.0047421$100.00$100.0047643$100.00$100.0047754$100.00$100.0054321$1401.12$1401.12Total$1692.67 
+ 			
+ 				
+ 					*Balance includes deposits that may be subject to holds
+ 				
+ 			
+ 		
+ 	
+
+ 	
+ 		
+ 			Error!
+ 		
+ 		
+ 			An internal error has occurred and has been logged.
+ 		
+ 	
+
+
+
+
+ 				
+ 			
+ 		
+ 		
+
+
+
+   
+     
+       Home| 
+       About Us| 
+       Services| 
+       Products| 
+       Locations| 
+       Forum| 
+       Site Map| 
+       Contact Us
+     
+     © Parasoft. All rights reserved.
+     
+       Visit us at:
+       www.parasoft.com
+     
+   
+
+ 	
+
+

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body')
    12 × locator resolved to <body>…</body>
       - unexpected value "
		
			
				
				
					




  
  
  Experience the difference


  



  Solutions
  About Us
  Services
  Products
  Locations
  Admin Page
  

  



  home
  about
  contact


				
			
			
				
					
						
						
							


Welcome John Smith

Account Services




  Open New Account
  Accounts Overview
  Transfer Funds
  Bill Pay
  Find Transactions
  Update Contact Info
  Request Loan
  Log Out

						
					
				
				
					



	
		
			Accounts Overview
		
		
			
				
					Account
					Balance*
					Available Amount
				
			
			12345-$5152.07$0.0012456$412.52$412.5212567$100.00$100.0012678-$100.00$0.0012789$100.00$100.0012900$0.00$0.0013011$100.00$100.0013122$1100.00$1100.0013233$100.00$100.0013344$1131.10$1131.1014232$100.00$100.0014454$100.00$100.0015786$100.00$100.0016896$0.00$0.0017895$100.00$100.0018006$100.00$100.0022557$100.00$100.0044757$100.00$100.0044868$100.00$100.0044979$100.00$100.0045090$100.00$100.0045201$100.00$100.0045312$100.00$100.0045423$100.00$100.0045534$100.00$100.0045645$100.00$100.0045756$100.00$100.0046755$100.00$100.0046866$100.00$100.0046977$100.00$100.0047088$100.00$100.0047199$100.00$100.0047310$100.00$100.0047421$100.00$100.0047643$100.00$100.0047754$100.00$100.0054321$1401.12$1401.12Total$1692.67 
			
				
					*Balance includes deposits that may be subject to holds
				
			
		
	

	
		
			Error!
		
		
			An internal error has occurred and has been logged.
		
	




				
			
		
		



  
    
      Home| 
      About Us| 
      Services| 
      Products| 
      Locations| 
      Forum| 
      Site Map| 
      Contact Us
    
    © Parasoft. All rights reserved.
    
      Visit us at:
      www.parasoft.com
    
  

	

"

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
- paragraph: Welcome John Smith
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
- heading "Accounts Overview" [level=1]
- table:
  - rowgroup:
    - row "Account Balance* Available Amount":
      - columnheader "Account"
      - columnheader "Balance*"
      - columnheader "Available Amount"
  - rowgroup:
    - row "12345 -$5152.07 $0.00":
      - cell "12345":
        - link "12345":
          - /url: activity.htm?id=12345
      - cell "-$5152.07"
      - cell "$0.00"
    - row "12456 $412.52 $412.52":
      - cell "12456":
        - link "12456":
          - /url: activity.htm?id=12456
      - cell "$412.52"
      - cell "$412.52"
    - row "12567 $100.00 $100.00":
      - cell "12567":
        - link "12567":
          - /url: activity.htm?id=12567
      - cell "$100.00"
      - cell "$100.00"
    - row "12678 -$100.00 $0.00":
      - cell "12678":
        - link "12678":
          - /url: activity.htm?id=12678
      - cell "-$100.00"
      - cell "$0.00"
    - row "12789 $100.00 $100.00":
      - cell "12789":
        - link "12789":
          - /url: activity.htm?id=12789
      - cell "$100.00"
      - cell "$100.00"
    - row "12900 $0.00 $0.00":
      - cell "12900":
        - link "12900":
          - /url: activity.htm?id=12900
      - cell "$0.00"
      - cell "$0.00"
    - row "13011 $100.00 $100.00":
      - cell "13011":
        - link "13011":
          - /url: activity.htm?id=13011
      - cell "$100.00"
      - cell "$100.00"
    - row "13122 $1100.00 $1100.00":
      - cell "13122":
        - link "13122":
          - /url: activity.htm?id=13122
      - cell "$1100.00"
      - cell "$1100.00"
    - row "13233 $100.00 $100.00":
      - cell "13233":
        - link "13233":
          - /url: activity.htm?id=13233
      - cell "$100.00"
      - cell "$100.00"
    - row "13344 $1131.10 $1131.10":
      - cell "13344":
        - link "13344":
          - /url: activity.htm?id=13344
      - cell "$1131.10"
      - cell "$1131.10"
    - row "14232 $100.00 $100.00":
      - cell "14232":
        - link "14232":
          - /url: activity.htm?id=14232
      - cell "$100.00"
      - cell "$100.00"
    - row "14454 $100.00 $100.00":
      - cell "14454":
        - link "14454":
          - /url: activity.htm?id=14454
      - cell "$100.00"
      - cell "$100.00"
    - row "15786 $100.00 $100.00":
      - cell "15786":
        - link "15786":
          - /url: activity.htm?id=15786
      - cell "$100.00"
      - cell "$100.00"
    - row "16896 $0.00 $0.00":
      - cell "16896":
        - link "16896":
          - /url: activity.htm?id=16896
      - cell "$0.00"
      - cell "$0.00"
    - row "17895 $100.00 $100.00":
      - cell "17895":
        - link "17895":
          - /url: activity.htm?id=17895
      - cell "$100.00"
      - cell "$100.00"
    - row "18006 $100.00 $100.00":
      - cell "18006":
        - link "18006":
          - /url: activity.htm?id=18006
      - cell "$100.00"
      - cell "$100.00"
    - row "22557 $100.00 $100.00":
      - cell "22557":
        - link "22557":
          - /url: activity.htm?id=22557
      - cell "$100.00"
      - cell "$100.00"
    - row "44757 $100.00 $100.00":
      - cell "44757":
        - link "44757":
          - /url: activity.htm?id=44757
      - cell "$100.00"
      - cell "$100.00"
    - row "44868 $100.00 $100.00":
      - cell "44868":
        - link "44868":
          - /url: activity.htm?id=44868
      - cell "$100.00"
      - cell "$100.00"
    - row "44979 $100.00 $100.00":
      - cell "44979":
        - link "44979":
          - /url: activity.htm?id=44979
      - cell "$100.00"
      - cell "$100.00"
    - row "45090 $100.00 $100.00":
      - cell "45090":
        - link "45090":
          - /url: activity.htm?id=45090
      - cell "$100.00"
      - cell "$100.00"
    - row "45201 $100.00 $100.00":
      - cell "45201":
        - link "45201":
          - /url: activity.htm?id=45201
      - cell "$100.00"
      - cell "$100.00"
    - row "45312 $100.00 $100.00":
      - cell "45312":
        - link "45312":
          - /url: activity.htm?id=45312
      - cell "$100.00"
      - cell "$100.00"
    - row "45423 $100.00 $100.00":
      - cell "45423":
        - link "45423":
          - /url: activity.htm?id=45423
      - cell "$100.00"
      - cell "$100.00"
    - row "45534 $100.00 $100.00":
      - cell "45534":
        - link "45534":
          - /url: activity.htm?id=45534
      - cell "$100.00"
      - cell "$100.00"
    - row "45645 $100.00 $100.00":
      - cell "45645":
        - link "45645":
          - /url: activity.htm?id=45645
      - cell "$100.00"
      - cell "$100.00"
    - row "45756 $100.00 $100.00":
      - cell "45756":
        - link "45756":
          - /url: activity.htm?id=45756
      - cell "$100.00"
      - cell "$100.00"
    - row "46755 $100.00 $100.00":
      - cell "46755":
        - link "46755":
          - /url: activity.htm?id=46755
      - cell "$100.00"
      - cell "$100.00"
    - row "46866 $100.00 $100.00":
      - cell "46866":
        - link "46866":
          - /url: activity.htm?id=46866
      - cell "$100.00"
      - cell "$100.00"
    - row "46977 $100.00 $100.00":
      - cell "46977":
        - link "46977":
          - /url: activity.htm?id=46977
      - cell "$100.00"
      - cell "$100.00"
    - row "47088 $100.00 $100.00":
      - cell "47088":
        - link "47088":
          - /url: activity.htm?id=47088
      - cell "$100.00"
      - cell "$100.00"
    - row "47199 $100.00 $100.00":
      - cell "47199":
        - link "47199":
          - /url: activity.htm?id=47199
      - cell "$100.00"
      - cell "$100.00"
    - row "47310 $100.00 $100.00":
      - cell "47310":
        - link "47310":
          - /url: activity.htm?id=47310
      - cell "$100.00"
      - cell "$100.00"
    - row "47421 $100.00 $100.00":
      - cell "47421":
        - link "47421":
          - /url: activity.htm?id=47421
      - cell "$100.00"
      - cell "$100.00"
    - row "47643 $100.00 $100.00":
      - cell "47643":
        - link "47643":
          - /url: activity.htm?id=47643
      - cell "$100.00"
      - cell "$100.00"
    - row "47754 $100.00 $100.00":
      - cell "47754":
        - link "47754":
          - /url: activity.htm?id=47754
      - cell "$100.00"
      - cell "$100.00"
    - row "54321 $1401.12 $1401.12":
      - cell "54321":
        - link "54321":
          - /url: activity.htm?id=54321
      - cell "$1401.12"
      - cell "$1401.12"
    - row "Total $1692.67":
      - cell "Total"
      - cell "$1692.67"
      - cell
  - rowgroup:
    - row "*Balance includes deposits that may be subject to holds":
      - cell "*Balance includes deposits that may be subject to holds"
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
  1   | import { test, expect } from '@playwright/test';
  2   | import LoginPage from '../../POM/LoginPage';
  3   | import loginData from '../../test-data/loginData.json';
  4   | 
  5   | test.beforeEach(async ({ page }) => {
  6   |     await page.context().clearCookies();
  7   | });
  8   | 
  9   | test('TC01 - Valid Login', async ({ page }) => {
  10  |     const login = new LoginPage(page);
  11  |     await login.gotoLoginPage();
  12  |     await login.login(
  13  |         loginData.validUser.username,
  14  |         loginData.validUser.password
  15  |     );
  16  |     await login.verifyLoginSuccess();
  17  |     console.log(' Valid Login Successful');
  18  | });
  19  | 
  20  | 
  21  | test('TC02 - Invalid Login', async ({ page }) => {
  22  |     const login = new LoginPage(page);
  23  |     await login.gotoLoginPage();
  24  |     await login.login(
  25  |         loginData.invalidUser.username,
  26  |         loginData.invalidUser.password
  27  |     );
  28  |     await login.verifyInvalidLogin();
  29  |     console.log('Invalid Login Verified');
  30  | });
  31  | 
  32  | 
  33  | test('TC03 - Logout Validation', async ({ page }) => {
  34  | 
  35  |     const login = new LoginPage(page);
  36  |     await login.gotoLoginPage();
  37  |     await login.login(
  38  |         loginData.validUser.username,
  39  |         loginData.validUser.password
  40  |     );
  41  |     await login.verifyLoginSuccess();
  42  |     await login.logout();
  43  |     console.log(' Logout Successful');
  44  | });
  45  | 
  46  | 
  47  | test('TC04 - Empty Credentials', async ({ page }) => {
  48  |     const login = new LoginPage(page);
  49  |     await login.gotoLoginPage();
  50  |     await login.login(loginData.emptyUser.username, loginData.emptyUser.password);
  51  |     await login.verifyInvalidLogin();
  52  |     console.log(' Empty Credential Validation Done');
  53  | });
  54  | 
  55  | 
  56  | test('TC05 - Session Validation', async ({ page }) => {
  57  |     const login = new LoginPage(page);
  58  |     await login.gotoLoginPage();
  59  |     await login.login(
  60  |         loginData.validUser.username,
  61  |         loginData.validUser.password
  62  |     );
  63  |     await login.verifyLoginSuccess();
  64  |     await page.reload();
  65  |     await expect(
  66  |         page.getByRole('heading', {
  67  |             name: 'Accounts Overview'
  68  |         })
  69  |     ).toBeVisible();
  70  |     console.log(' Session Persistence Verified');
  71  | });
  72  | 
  73  | 
  74  | 
  75  | test('TC06 - Invalid Password Login', async ({ page }) => {
  76  |     const login = new LoginPage(page);
  77  |     await login.gotoLoginPage();
  78  |     await login.login(
  79  |         loginData.invalidPasswordUser.username,
  80  |         loginData.invalidPasswordUser.password
  81  |     );
> 82  |     await expect(page.locator('body')).toContainText(
      |                                        ^ Error: expect(locator).toContainText(expected) failed
  83  |         'The username and password could not be verified'
  84  |     );
  85  |     console.log(
  86  |         ' Invalid Password Validation Done'
  87  |     );
  88  | });
  89  | 
  90  | 
  91  | test('TC07 - Password Masking Validation', async ({ page }) => {
  92  |     const login = new LoginPage(page);
  93  |     await login.gotoLoginPage();
  94  |     const passwordField =
  95  |         page.locator('input[name="password"]');
  96  |     await expect(passwordField)
  97  |         .toHaveAttribute('type', 'password');
  98  |     console.log(' Password Masking Verified');
  99  | });
  100 | 
  101 | 
  102 | test('TC08 - Multiple Login Attempts', async ({ page }) => {
  103 |     const login = new LoginPage(page);
  104 |     await login.gotoLoginPage();
  105 |     for (let i = 0; i < 3; i++) {
  106 |         await login.login(
  107 |             loginData.invalidUser.username,
  108 |             loginData.invalidUser.password
  109 |         );
  110 |         await login.verifyInvalidLogin();
  111 |     }
  112 |     console.log(' Multiple Login Attempts Tested');
  113 | });
  114 | 
  115 | 
  116 | test('TC09 - Browser Back Validation', async ({ page }) => {
  117 |     const login = new LoginPage(page);
  118 |     await login.gotoLoginPage();
  119 |     await login.login(
  120 |         loginData.validUser.username,
  121 |         loginData.validUser.password
  122 |     );
  123 |     await login.verifyLoginSuccess();
  124 |     await login.logout();
  125 |     await page.goBack();
  126 |     await expect(
  127 |         page.locator('body')
  128 |     ).toContainText('Accounts Overview');
  129 | 
  130 |     console.log(' Browser Back Validation Done');
  131 | });
  132 | 
  133 | 
  134 | test('TC10 - Remember Me Validation', async ({ page }) => {
  135 |     const login = new LoginPage(page);
  136 |     await login.gotoLoginPage();
  137 |     await login.login(
  138 |         loginData.validUser.username,
  139 |         loginData.validUser.password
  140 |     );
  141 |     await login.verifyLoginSuccess();
  142 |     await page.reload();
  143 |     await login.verifyLoginSuccess();
  144 |     console.log(' Remember Me Validation Done');
  145 | });
  146 | 
  147 | 
  148 | test('TC11 - Unauthorized Access Validation', async ({ page }) => {
  149 |     await page.goto(
  150 |         'https://parabank.parasoft.com/parabank/overview.htm'
  151 |     );
  152 |     await expect(
  153 |         page.locator('input[value="Log In"]')
  154 |     ).toBeVisible();
  155 |     console.log(' Unauthorized Access Validation Done');
  156 | });
  157 | 
  158 | 
  159 | test('TC12 - Concurrent Login Validation', async ({ browser }) => {
  160 |     const context1 = await browser.newContext();
  161 |     const page1 = await context1.newPage();
  162 |     const login1 = new LoginPage(page1);
  163 |     await login1.gotoLoginPage();
  164 |     await login1.login(
  165 |         loginData.validUser.username,
  166 |         loginData.validUser.password
  167 |     );
  168 |     await login1.verifyLoginSuccess();
  169 |     const context2 = await browser.newContext();
  170 |     const page2 = await context2.newPage();
  171 |     const login2 = new LoginPage(page2);
  172 |     await login2.gotoLoginPage();
  173 |     await login2.login(
  174 |         loginData.validUser.username,
  175 |         loginData.validUser.password
  176 |     );
  177 |     await login2.verifyLoginSuccess();
  178 |     console.log(' Concurrent Login Validation Done');
  179 | });
  180 | 
  181 | 
  182 | test('TC13 - Direct URL Access After Logout', async ({ page }) => {
```