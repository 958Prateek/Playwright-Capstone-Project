# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findTransaction\findTransactions.spec.js >> Find Transactions Module >> TC06 - Invalid Amount
- Location: tests\findTransaction\findTransactions.spec.js:69:10

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Timeout: 5000ms
- Expected substring  -   1
+ Received string     + 208

- user_1779993576855
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
+ Customer Login
+
+   
+     
+     Username
+     
+     Password
+     
+     Log In
+   
+   Forgot login info?
+   Register
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
+ Signing up is easy!
+
+ If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
+
+
+   
+     
+       First Name:
+       
+         
+       
+       
+         
+       
+     
+     
+       Last Name:
+       
+         
+       
+       
+         
+       
+     
+     
+       Address:
+       
+         
+       
+       
+         
+       
+     
+     
+       City:
+       
+         
+       
+       
+         
+       
+     
+     
+       State:
+       
+         
+       
+       
+         
+       
+     
+     
+       Zip Code:
+       
+         
+       
+       
+         Zip Code is required.
+       
+     
+     
+       Phone #:
+       
+         
+       
+       
+         
+       
+     
+     
+       SSN:
+       
+         
+       
+       
+         
+       
+     
+      
+     
+       Username:
+       
+         
+       
+       
+         
+       
+     
+     
+       Password:
+       
+         
+       
+       
+         
+       
+     
+     
+       Confirm:
+       
+         
+       
+       
+         
+       
+         
+     
+        
+       Register
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
    13 × locator resolved to <body onload="document.login.username.focus();">…</body>
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


				
				
			
			
				
					
						
							


Customer Login

  
    
    Username
    
    Password
    
    Log In
  
  Forgot login info?
  Register

						
						
					
				
				
					



Signing up is easy!

If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.


  
    
      First Name:
      
        
      
      
        
      
    
    
      Last Name:
      
        
      
      
        
      
    
    
      Address:
      
        
      
      
        
      
    
    
      City:
      
        
      
      
        
      
    
    
      State:
      
        
      
      
        
      
    
    
      Zip Code:
      
        
      
      
        Zip Code is required.
      
    
    
      Phone #:
      
        
      
      
        
      
    
    
      SSN:
      
        
      
      
        
      
    
     
    
      Username:
      
        
      
      
        
      
    
    
      Password:
      
        
      
      
        
      
    
    
      Confirm:
      
        
      
      
        
      
        
    
       
      Register
    
  
  

				
			
		
		



  
    
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
- heading "Customer Login" [level=2]
- paragraph: Username
- textbox
- paragraph: Password
- textbox
- button "Log In"
- paragraph:
  - link "Forgot login info?":
    - /url: lookup.htm
- paragraph:
  - link "Register":
    - /url: register.htm
- heading "Signing up is easy!" [level=1]
- paragraph: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
- table:
  - rowgroup:
    - 'row "First Name: Prateek"':
      - cell "First Name:"
      - cell "Prateek":
        - textbox: Prateek
      - cell
    - 'row "Last Name: Chaturvedi"':
      - cell "Last Name:"
      - cell "Chaturvedi":
        - textbox: Chaturvedi
      - cell
    - 'row "Address: Pune"':
      - cell "Address:"
      - cell "Pune":
        - textbox: Pune
      - cell
    - 'row "City: Pune"':
      - cell "City:"
      - cell "Pune":
        - textbox: Pune
      - cell
    - 'row "State: MH"':
      - cell "State:"
      - cell "MH":
        - textbox: MH
      - cell
    - 'row "Zip Code: Zip Code is required."':
      - cell "Zip Code:"
      - cell:
        - textbox
      - cell "Zip Code is required."
    - 'row "Phone #: 9125349995"':
      - 'cell "Phone #:"'
      - cell "9125349995":
        - textbox: "9125349995"
      - cell
    - 'row "SSN: 123456789"':
      - cell "SSN:"
      - cell "123456789":
        - textbox: "123456789"
      - cell
    - row:
      - cell
    - 'row "Username: user_1779993576855"':
      - cell "Username:"
      - cell "user_1779993576855":
        - textbox: user_1779993576855
      - cell
    - row "Password:":
      - cell "Password:"
      - cell:
        - textbox
      - cell
    - row "Confirm:":
      - cell "Confirm:"
      - cell:
        - textbox
      - cell
    - row "Register":
      - cell
      - cell "Register":
        - button "Register"
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
  3  | class RegisterPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.registerLink =page.locator('text=Register');
  7  |         this.firstName = page.locator('#customer\\.firstName');
  8  |         this.lastName = page.locator('#customer\\.lastName');
  9  |         this.address = page.locator('#customer\\.address\\.street');
  10 |         this.city = page.locator('#customer\\.address\\.city');
  11 |         this.state = page.locator('#customer\\.address\\.state');
  12 |         this.zipCode = page.locator('#customer\\.address\\.zipCode');
  13 |         this.phone = page.locator('#customer\\.phoneNumber');
  14 |         this.ssn = page.locator('#customer\\.ssn');
  15 |         this.username = page.locator('#customer\\.username');
  16 |         this.password = page.locator('#customer\\.password');
  17 |         this.confirmPassword = page.locator('#repeatedPassword');
  18 |         this.registerButton = page.locator('input[value="Register"]');
  19 |         this.successMessage = page.locator('.title');
  20 |     }
  21 | 
  22 |     async gotoRegisterPage() {
  23 |         await this.page.goto(
  24 |             'https://parabank.parasoft.com/parabank/index.htm');
  25 |         await this.page.waitForLoadState('domcontentloaded');
  26 |         await this.registerLink.click();
  27 |     }
  28 | 
  29 |     async registerUser(user) {
  30 |         await this.page.waitForLoadState('domcontentloaded');
  31 |         await this.firstName.fill(user.firstName);
  32 |         await this.lastName.fill(user.lastName);
  33 |         await this.address.fill(user.address);
  34 |         await this.city.fill(user.city);
  35 |         await this.state.fill(user.state);
  36 |         await this.zipCode.fill(user.zipCode);
  37 |         await this.phone.fill(user.phone);
  38 |         await this.ssn.fill(user.ssn);
  39 |         await this.username.fill(user.username);
  40 |         await this.password.fill(user.password);
  41 |         await this.confirmPassword.fill(user.confirmpassword || user.password);
  42 |         await this.registerButton.click();
  43 |     }
  44 | 
  45 |     async verifyRegistration(username) {
  46 |         await expect(
  47 |             this.page.locator('body')
  48 |             // this.page.locator('#rightPanel')
> 49 |         ).toContainText(
     |           ^ Error: expect(locator).toContainText(expected) failed
  50 |             // 'Your account was created successfully'
  51 |             // 'Welcome'
  52 |             username
  53 |         );
  54 |         await expect(
  55 |             this.page.locator('#rightPanel')
  56 |         ).toContainText(
  57 |             username
  58 |         );
  59 |     }
  60 | 
  61 | 
  62 |     // async verifyRegistrationSuccess(username) {
  63 |     //     await expect(
  64 |     //         this.page.locator('#rightPanel')
  65 |     //     ).toContainText(username);
  66 |     // }
  67 | }
  68 | 
  69 | export default RegisterPage;
```