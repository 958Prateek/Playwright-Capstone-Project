export class LoginPage {
     constructor(page) {
          this.page = page;
          this.usernameInput = page.locator('#username');
          this.passInput = page.locator('#password');
          this.btn = page.locator('#loginBtn');
     }

     async navigate() {
          await this.page.goto('http://127.0.0.1:5500/Day-13/webapp/public/login.html');

     }

     async fillForm(email, pass) {
          await this.usernameInput.fill(email);
          await this.passInput.fill(pass);
     }

     async submit() {
          await this.btn.click();
     }

     async getLoginResponse() {
          //return await this.response
     }


}