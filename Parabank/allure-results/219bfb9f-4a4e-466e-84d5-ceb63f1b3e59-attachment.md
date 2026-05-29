# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\authentication.spec.js >> TC02 - Invalid Login
- Location: tests\authentication\authentication.spec.js:21:5

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


				
			
			
				
					
						
						
							


Welcome Lucid Crawler

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
				
			
			19671$515.50$515.50Total$515.50 
			
				
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
    13 × locator resolved to <body>…</body>
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


				
			
			
				
					
						
						
							


Welcome Lucid Crawler

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
				
			
			19671$515.50$515.50Total$515.50 
			
				
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
- paragraph: Welcome Lucid Crawler
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
    - row "19671 $515.50 $515.50":
      - cell "19671":
        - link "19671":
          - /url: activity.htm?id=19671
      - cell "$515.50"
      - cell "$515.50"
    - row "Total $515.50":
      - cell "Total"
      - cell "$515.50"
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