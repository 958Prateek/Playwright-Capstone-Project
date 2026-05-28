# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountOverview\accountOverview.spec.js >> Accounts Overview Module >> TC02 - Verify Account Balance Visible
- Location: tests\accountOverview\accountOverview.spec.js:37:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Timeout: 5000ms
- Expected substring  -   1
+ Received string     + 104

- user_8s2fgq8i
+
+
+     
+         
+             
+                 Bad gateway
+                 Error code 502
+             
+             
+                 Visit cloudflare.com for more information.
+             
+             2026-05-26 13:00:09 UTC
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
+   You
+   
+   
+     Browser
+   
+   
+   
+   Working
+   
+
+                     
+   
+     
+     
+     
+     
+   
+   Frankfurt
+   
+   
+     Cloudflare
+   
+   
+   
+   Working
+   
+
+                     
+   
+     
+     
+     
+     
+   
+   parabank.parasoft.com
+   
+   
+     Host
+   
+   
+   
+   Error
+   
+
+                 
+             
+         
+
+         
+             
+                 
+                     What happened?
+                     The web server reported a bad gateway error.
+                 
+                 
+                     What can I do?
+                     Please try again in a few minutes.
+                 
+             
+         
+
+         
+     
+       Cloudflare Ray ID: a01cf5e4dc50d384
+       •
+       
+         Your IP:
+         Click to reveal
+         2409:40e3:40f9:fc6:6871:31a1:66ff:d83b
+         •
+       
+       Performance & security by Cloudflare
+       
+     
+     
+   
+
+     
+
+
+

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body')
    5 × locator resolved to <body>…</body>
      - unexpected value "

    
        
            
                Bad gateway
                Error code 502
            
            
                Visit cloudflare.com for more information.
            
            2026-05-26 13:00:09 UTC
        
        
            
                
                    
  
    
    
    
    
  
  You
  
  
    Browser
  
  
  
  Working
  

                    
  
    
    
    
    
  
  Frankfurt
  
  
    Cloudflare
  
  
  
  Working
  

                    
  
    
    
    
    
  
  parabank.parasoft.com
  
  
    Host
  
  
  
  Error
  

                
            
        

        
            
                
                    What happened?
                    The web server reported a bad gateway error.
                
                
                    What can I do?
                    Please try again in a few minutes.
                
            
        

        
    
      Cloudflare Ray ID: a01cf5e4dc50d384
      •
      
        Your IP:
        Click to reveal
        2409:40e3:40f9:fc6:6871:31a1:66ff:d83b
        •
      
      Performance & security by Cloudflare
      
    
    "
    8 × locator resolved to <body>…</body>
      - unexpected value "

    
        
            
                Bad gateway
                Error code 502
            
            
                Visit cloudflare.com for more information.
            
            2026-05-26 13:00:09 UTC
        
        
            
                
                    
  
    
    
    
    
  
  You
  
  
    Browser
  
  
  
  Working
  

                    
  
    
    
    
    
  
  Frankfurt
  
  
    Cloudflare
  
  
  
  Working
  

                    
  
    
    
    
    
  
  parabank.parasoft.com
  
  
    Host
  
  
  
  Error
  

                
            
        

        
            
                
                    What happened?
                    The web server reported a bad gateway error.
                
                
                    What can I do?
                    Please try again in a few minutes.
                
            
        

        
    
      Cloudflare Ray ID: a01cf5e4dc50d384
      •
      
        Your IP:
        Click to reveal
        2409:40e3:40f9:fc6:6871:31a1:66ff:d83b
        •
      
      Performance & security by Cloudflare
      
    
    
  

    


"

```

```yaml
- banner:
  - heading "Bad gateway Error code 502" [level=1]
  - text: Visit
  - link "cloudflare.com":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=parabank.parasoft.com
  - text: for more information. 2026-05-26 13:00:09 UTC
- text: You
- heading "Browser" [level=3]
- text: Working
- link:
  - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=parabank.parasoft.com
- text: Frankfurt
- heading "Cloudflare" [level=3]:
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=parabank.parasoft.com
- text: Working parabank.parasoft.com
- heading "Host" [level=3]
- text: Error
- heading "What happened?" [level=2]
- paragraph: The web server reported a bad gateway error.
- heading "What can I do?" [level=2]
- paragraph: Please try again in a few minutes.
- paragraph:
  - text: "Cloudflare Ray ID:"
  - strong: a01cf5e4dc50d384
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=parabank.parasoft.com
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
  50  |         await this.page.goto(
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
  70  |         await this.confirmPassword.fill(user.password);
  71  |         await this.registerButton.click();
  72  |     }
  73  | 
  74  |     async verifyRegistration(username) {
  75  | 
  76  |         await expect(
  77  |             this.page.locator('body')
  78  |             // this.page.locator('#rightPanel')
> 79  |         ).toContainText(
      |           ^ Error: expect(locator).toContainText(expected) failed
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