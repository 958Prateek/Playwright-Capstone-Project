# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\authentication.spec.js >> TC08 - Multiple Login Attempts
- Location: tests\authentication\authentication.spec.js:102:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Timeout: 5000ms
- Expected substring  -   1
+ Received string     + 131

- Customer Login
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
+ 			12345-$2950.00$0.0012456$10.45$10.4512567$100.00$100.0012678-$100.00$0.0012789$100.00$100.0012900$0.00$0.0013011$100.00$100.0013122$1100.00$1100.0013233$100.00$100.0013344$1231.10$1231.1035100$50.00$50.0035433$50.00$50.0035544$50.00$50.0035655$50.00$50.0035766$50.00$50.0035877$50.00$50.0035988$50.00$50.0036099$50.00$50.0036210$50.00$50.0036321$50.00$50.0036432$50.00$50.0036876$50.00$50.0038985$50.00$50.0054321$1351.12$1351.12Total$1692.67 
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
    3 × locator resolved to <body>…</body>
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
    10 × locator resolved to <body>…</body>
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
				
			
			12345-$2950.00$0.0012456$10.45$10.4512567$100.00$100.0012678-$100.00$0.0012789$100.00$100.0012900$0.00$0.0013011$100.00$100.0013122$1100.00$1100.0013233$100.00$100.0013344$1231.10$1231.1035100$50.00$50.0035433$50.00$50.0035544$50.00$50.0035655$50.00$50.0035766$50.00$50.0035877$50.00$50.0035988$50.00$50.0036099$50.00$50.0036210$50.00$50.0036321$50.00$50.0036432$50.00$50.0036876$50.00$50.0038985$50.00$50.0054321$1351.12$1351.12Total$1692.67 
			
				
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
    - row "12345 -$2950.00 $0.00":
      - cell "12345":
        - link "12345":
          - /url: activity.htm?id=12345
      - cell "-$2950.00"
      - cell "$0.00"
    - row "12456 $10.45 $10.45":
      - cell "12456":
        - link "12456":
          - /url: activity.htm?id=12456
      - cell "$10.45"
      - cell "$10.45"
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
    - row "13344 $1231.10 $1231.10":
      - cell "13344":
        - link "13344":
          - /url: activity.htm?id=13344
      - cell "$1231.10"
      - cell "$1231.10"
    - row "35100 $50.00 $50.00":
      - cell "35100":
        - link "35100":
          - /url: activity.htm?id=35100
      - cell "$50.00"
      - cell "$50.00"
    - row "35433 $50.00 $50.00":
      - cell "35433":
        - link "35433":
          - /url: activity.htm?id=35433
      - cell "$50.00"
      - cell "$50.00"
    - row "35544 $50.00 $50.00":
      - cell "35544":
        - link "35544":
          - /url: activity.htm?id=35544
      - cell "$50.00"
      - cell "$50.00"
    - row "35655 $50.00 $50.00":
      - cell "35655":
        - link "35655":
          - /url: activity.htm?id=35655
      - cell "$50.00"
      - cell "$50.00"
    - row "35766 $50.00 $50.00":
      - cell "35766":
        - link "35766":
          - /url: activity.htm?id=35766
      - cell "$50.00"
      - cell "$50.00"
    - row "35877 $50.00 $50.00":
      - cell "35877":
        - link "35877":
          - /url: activity.htm?id=35877
      - cell "$50.00"
      - cell "$50.00"
    - row "35988 $50.00 $50.00":
      - cell "35988":
        - link "35988":
          - /url: activity.htm?id=35988
      - cell "$50.00"
      - cell "$50.00"
    - row "36099 $50.00 $50.00":
      - cell "36099":
        - link "36099":
          - /url: activity.htm?id=36099
      - cell "$50.00"
      - cell "$50.00"
    - row "36210 $50.00 $50.00":
      - cell "36210":
        - link "36210":
          - /url: activity.htm?id=36210
      - cell "$50.00"
      - cell "$50.00"
    - row "36321 $50.00 $50.00":
      - cell "36321":
        - link "36321":
          - /url: activity.htm?id=36321
      - cell "$50.00"
      - cell "$50.00"
    - row "36432 $50.00 $50.00":
      - cell "36432":
        - link "36432":
          - /url: activity.htm?id=36432
      - cell "$50.00"
      - cell "$50.00"
    - row "36876 $50.00 $50.00":
      - cell "36876":
        - link "36876":
          - /url: activity.htm?id=36876
      - cell "$50.00"
      - cell "$50.00"
    - row "38985 $50.00 $50.00":
      - cell "38985":
        - link "38985":
          - /url: activity.htm?id=38985
      - cell "$50.00"
      - cell "$50.00"
    - row "54321 $1351.12 $1351.12":
      - cell "54321":
        - link "54321":
          - /url: activity.htm?id=54321
      - cell "$1351.12"
      - cell "$1351.12"
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
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export default class LoginPage {
  4  | 
  5  |     constructor(page) {
  6  | 
  7  |         this.page = page;
  8  | 
  9  |         this.username =
  10 |             page.locator('input[name="username"]');
  11 | 
  12 |         this.password =
  13 |             page.locator('input[name="password"]');
  14 | 
  15 |         this.loginBtn =
  16 |             page.locator('input[value="Log In"]');
  17 | 
  18 |         this.accountOverview =
  19 |             page.locator('h1.title');
  20 |         this.logoutLink =
  21 |             page.locator('a[href*="logout"]');
  22 |     }
  23 | 
  24 |     async gotoLoginPage() {
  25 |         await this.page.goto(
  26 |             'https://parabank.parasoft.com/parabank/index.htm'
  27 |         );
  28 |         await this.page.waitForTimeout(2000);
  29 |     }
  30 | 
  31 |     async login(username, password) {
  32 |         await this.page.goto(
  33 |             'https://parabank.parasoft.com/parabank/index.htm'
  34 |         );
  35 | 
  36 |         await this.username.clear();
  37 |         await this.username.fill(username);
  38 |         await this.password.clear();
  39 |         await this.password.fill(password);
  40 |         await Promise.all([
  41 |             this.page.waitForNavigation(),
  42 |             this.loginBtn.click()
  43 |         ]);
  44 |         // await this.loginBtn.click();
  45 |         // await this.page.waitForURL(
  46 |         //     '**/overview.htm',
  47 |         //     { timeout: 15000 }
  48 |         // );
  49 |     }
  50 | 
  51 |     async logout() {
  52 |         await this.logoutLink.click();
  53 |         await this.page.waitForTimeout(3000);
  54 |     }
  55 | 
  56 |     async verifyLoginSuccess() {
  57 |         await expect(
  58 |             this.page.locator('body')
  59 |         ).toContainText(
  60 |             'Accounts Overview',
  61 |             { timeout: 15000 }
  62 |         );
  63 |     }
  64 | 
  65 |     async verifyInvalidLogin() {
  66 |         await expect(
  67 |             this.page.locator('body')
> 68 |         ).toContainText(
     |           ^ Error: expect(locator).toContainText(expected) failed
  69 |             'Customer Login'
  70 |         );
  71 |     }
  72 | }
```