# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: transferFunds\transferFunds.spec.js >> Transfer Funds Module >> TC01 - Valid Fund Transfer
- Location: tests\transferFunds\transferFunds.spec.js:27:10

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#rightPanel')
Timeout: 5000ms
- Expected substring  -   1
+ Received string     + 119

- Welcome
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
+         City is required.
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
+         
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

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#rightPanel')
    13 × locator resolved to <div id="rightPanel">…</div>
       - unexpected value "
					



Signing up is easy!

If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.


  
    
      First Name:
      
        
      
      
        
      
    
    
      Last Name:
      
        
      
      
        
      
    
    
      Address:
      
        
      
      
        
      
    
    
      City:
      
        
      
      
        City is required.
      
    
    
      State:
      
        
      
      
        
      
    
    
      Zip Code:
      
        
      
      
        
      
    
    
      Phone #:
      
        
      
      
        
      
    
    
      SSN:
      
        
      
      
        
      
    
     
    
      Username:
      
        
      
      
        
      
    
    
      Password:
      
        
      
      
        
      
    
    
      Confirm:
      
        
      
      
        
      
        
    
       
      Register
    
  
  

				"

```

```yaml
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
    - 'row "City: City is required."':
      - cell "City:"
      - cell:
        - textbox
      - cell "City is required."
    - 'row "State: MH"':
      - cell "State:"
      - cell "MH":
        - textbox: MH
      - cell
    - 'row "Zip Code: 411001"':
      - cell "Zip Code:"
      - cell "411001":
        - textbox: "411001"
      - cell
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
    - 'row "Username: user_1779767362101"':
      - cell "Username:"
      - cell "user_1779767362101":
        - textbox: user_1779767362101
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
  56  |         await this.registerLink.click();
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
> 81  |         ).toContainText(
      |           ^ Error: expect(locator).toContainText(expected) failed
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