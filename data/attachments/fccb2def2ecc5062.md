# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\authentication.spec.js >> TC08 - Multiple Login Attempts
- Location: tests\authentication\authentication.spec.js:102:5

# Error details

```
Error: expect(locator).not.toContainText(expected) failed

Locator: locator('body')
Expected substring: not "Accounts Overview"
Received string: "
		
			
				
				
					




  
  
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
				
			
			12345-$3052.07$0.0012456$212.52$212.5212567$100.00$100.0012678-$100.00$0.0012789$100.00$100.0012900$0.00$0.0013011$100.00$100.0013122$1100.00$1100.0013233$100.00$100.0013344$1131.10$1131.1014232$100.00$100.0014454$100.00$100.0015786$100.00$100.0016896$0.00$0.0017895$100.00$100.0018006$100.00$100.0022557$100.00$100.0054321$1401.12$1401.12Total$1692.67 
			
				
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
Timeout: 5000ms

Call log:
  - Expect "not toContainText" with timeout 5000ms
  - waiting for locator('body')
    5 × locator resolved to <body>…</body>
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
    9 × locator resolved to <body>…</body>
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
				
			
			12345-$3052.07$0.0012456$212.52$212.5212567$100.00$100.0012678-$100.00$0.0012789$100.00$100.0012900$0.00$0.0013011$100.00$100.0013122$1100.00$1100.0013233$100.00$100.0013344$1131.10$1131.1014232$100.00$100.0014454$100.00$100.0015786$100.00$100.0016896$0.00$0.0017895$100.00$100.0018006$100.00$100.0022557$100.00$100.0054321$1401.12$1401.12Total$1692.67 
			
				
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
    - row "12345 -$3052.07 $0.00":
      - cell "12345":
        - link "12345":
          - /url: activity.htm?id=12345
      - cell "-$3052.07"
      - cell "$0.00"
    - row "12456 $212.52 $212.52":
      - cell "12456":
        - link "12456":
          - /url: activity.htm?id=12456
      - cell "$212.52"
      - cell "$212.52"
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
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export default class LoginPage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |         this.username = page.locator('input[name="username"]');
  8  |         this.password = page.locator('input[name="password"]');
  9  |         this.loginBtn = page.locator('input[value="Log In"]');
  10 |         this.accountOverview = page.locator('h1.title');
  11 |         this.logoutLink = page.locator('a[href*="logout"]');
  12 |     }
  13 | 
  14 |     async gotoLoginPage() {
  15 |         await this.page.goto(
  16 |             'https://parabank.parasoft.com/parabank/index.htm'
  17 |         );
  18 |         await this.page.waitForTimeout(2000);
  19 |     }
  20 |     async login(username, password) {
  21 |         await this.page.goto(
  22 |             'https://parabank.parasoft.com/parabank/index.htm'
  23 |         );
  24 |         await this.username.clear();
  25 |         await this.username.fill(username);
  26 |         await this.password.clear();
  27 |         await this.password.fill(password);
  28 |         await Promise.all([
  29 |             this.page.waitForNavigation(),
  30 |             this.loginBtn.click()
  31 |         ]);
  32 |         // await this.loginBtn.click();
  33 |         // await this.page.waitForURL(
  34 |         //     '**/overview.htm',
  35 |         //     { timeout: 15000 }
  36 |         // );
  37 |     }
  38 | 
  39 |     async logout() {
  40 |         await this.logoutLink.click();
  41 |         await this.page.waitForTimeout(3000);
  42 |     }
  43 |     async verifyLoginSuccess() {
  44 |         await expect(
  45 |             this.page.locator('body')
  46 |         ).toContainText(
  47 |             'Accounts Overview',
  48 |             { timeout: 15000 }
  49 |         );
  50 |     }
  51 | 
  52 |     async verifyInvalidLogin() {
  53 |         await expect(
  54 |             this.page.locator('body')
> 55 |         ).not.toContainText(
     |               ^ Error: expect(locator).not.toContainText(expected) failed
  56 |             'Accounts Overview'
  57 |         );
  58 |     }
  59 | }
```