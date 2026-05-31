# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registration\registration.spec.js >> Registration Module >> TC14 - Registration Page Title Validation
- Location: tests\registration\registration.spec.js:234:10

# Error details

```
TypeError: register.gotoregisterPage is not a function
```

# Test source

```ts
  136 |                firstName: '@@@###',
  137 |                lastName: '$$$%%%',
  138 |                username: 'special' + Date.now()
  139 |           };
  140 |           await register.gotoRegisterPage();
  141 |           await register.registerUser(user);
  142 | 
  143 |           console.log(' Special Character Validation Executed');
  144 |      });
  145 | 
  146 | 
  147 |      test('TC09 - Long Input Validation', async ({ page }) => {
  148 | 
  149 |           const register = new RegisterPage(page);
  150 |           const longText =
  151 |                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  152 | 
  153 |           const user = {
  154 |                 ...registerData.validUser,
  155 | 
  156 |                firstName: longText,
  157 |                lastName: longText,
  158 |                username:
  159 |                     'longUser' + Date.now()
  160 |           };
  161 |           await register.gotoRegisterPage();
  162 |           await register.registerUser(user);
  163 |           console.log(' Long Input Validation Executed');
  164 |      });
  165 | 
  166 |      test('TC10 - Invalid SSN Validation', async ({ page }) => {
  167 | 
  168 |           const register = new RegisterPage(page);
  169 |           const user = {
  170 |                 ...registerData.validUser,
  171 | 
  172 |                ssn: 'abcd123',
  173 |                username: 'ssnUser' + Date.now()
  174 |           };
  175 |           await register.gotoRegisterPage();
  176 |           await register.registerUser(user);
  177 | 
  178 |           console.log(' Invalid SSN Validation Executed');
  179 |      });
  180 | 
  181 |      test('TC11 - Username Validation', async ({ page }) => {
  182 | 
  183 |           const register = new RegisterPage(page);
  184 |           const user = {
  185 |               ...registerData.validUser,
  186 | 
  187 |               username: 'ab'
  188 |           };
  189 |           await register.gotoRegisterPage();
  190 |           await register.registerUser(user);
  191 |           console.log(' Username Validation Executed');
  192 |      });
  193 | 
  194 | 
  195 |      test('TC12 - Complete Registration Flow', async ({ page }) => {
  196 |           const register = new RegisterPage(page);
  197 |           const user = {
  198 |                ...registerData.validUser,
  199 | 
  200 |                username: `user_${Math.random().toString(36).substring(2,12)}`
  201 |           };
  202 | 
  203 |           await register.gotoRegisterPage();
  204 |           await register.registerUser(user);
  205 |           await register.verifyRegistration(user.username);
  206 |           console.log(' Complete Registration Flow Successful');
  207 |      });
  208 | 
  209 |      test('TC13 - Duplicate Phone Number Validation', async ({ page }) => {
  210 |           const register = new RegisterPage(page);
  211 |           const user = {
  212 |                ...registerData.validUser,
  213 |                username: 'phoneUser' + Date.now()
  214 |           };
  215 |           await register.gotoRegisterPage();
  216 |           await register.registerUser(user);
  217 |           await page.goto(
  218 |                'https://parabank.parasoft.com/parabank/logout.htm'
  219 |           );
  220 |           await page.goto(
  221 |                'https://parabank.parasoft.com/parabank/register.htm'
  222 |           );
  223 |           const secondUser = {
  224 |                ...registerData.validUser,
  225 |                phone: user.phone,
  226 |                username:'secondPhoneUser'+ Date.now()
  227 |           };
  228 |           await register.registerUser(secondUser);
  229 |           console.log(
  230 |                ' Duplicate Phone Validation Executed'
  231 |           );
  232 |      });
  233 | 
  234 |      test('TC14 - Registration Page Title Validation', async ({ page }) => {
  235 |           const register = new RegisterPage(page);
> 236 |           await register.gotoregisterPage();
      |                          ^ TypeError: register.gotoregisterPage is not a function
  237 |           await expect(page.locator('.title')).toContainText('singning up is easy!')
  238 |      });
  239 | 
  240 |      test('TC15 - Registration Form Reset Validation', async ({ page }) => {
  241 |           const register = new RegisterPage(page);
  242 |           await register.gotoRegisterPage();
  243 |           await register.firstName.fill('Prateek');
  244 |           await register.lastName.fill( 'Chaturvedi');
  245 |           await page.reload();
  246 |           await expect(register.firstName).toHaveValue('');
  247 |           await expect(register.lastName ).toHaveValue('');
  248 |           console.log(' Registration Form Reset Verified');
  249 |      });
  250 | 
  251 | 
  252 | })
```