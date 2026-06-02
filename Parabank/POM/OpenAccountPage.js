import { expect } from '@playwright/test';

class OpenAccountPage {
     constructor(page) {
          this.page = page;
          this.openAccountLink =
               page.locator('a[href="openaccount.htm"]');

          this.accountTypeDropdown =
               page.locator('#type');

          this.fromAccountDropdown =
               page.locator('#fromAccountId');

          this.openAccountButton =
               page.locator(
                    'input[value="Open New Account"]'
               );
          this.successMessage =
               page.locator('#openAccountResult');

          this.newAccountNumber =
               page.locator('#newAccountId');

          this.accountOpenedText =
               page.getByRole('heading', {
                    name: 'Account Opened!'
               });
     }

     async gotoOpenAccountPage() {
          await this.openAccountLink.click();
          await expect(this.accountTypeDropdown)
                 .toBeVisible({ timeout: 15000 });
     }
     async selectAccountType(type) {
          await this.accountTypeDropdown.selectOption(type);
     }

     async clickOpenAccountButton() {
          await this.openAccountButton.click();
     }

     async openNewAccount(type) {
          await this.gotoOpenAccountPage();

          // await this.page.goto(
          //      'https://parabank.parasoft.com/parabank/openaccount.htm'
          // );
          // await this.page.waitForLoadState('domcontentloaded');
          await expect(this.accountTypeDropdown).toBeVisible({ timeout: 10000 });
          await this.accountTypeDropdown.selectOption(type);
          await expect(this.openAccountButton).toBeVisible({ timeout: 10000 });
          await this.page.waitForTimeout(1000);
          await this.openAccountButton.click();
          await this.page.waitForLoadState('domcontentloaded');
          // await this.page.waitForTimeout(2000);
     }

     // async openNewAccount(type) {
     //      await this.page.waitForLoadState(
     //           'networkidle'
     //      );
     //      await this.accountTypeDropdown.selectOption(type);
     //      await this.page.waitForTimeout(2000);
     //      await this.openAccountButton.click();
     //      await this.page.waitForLoadState(
     //           'networkidle'
     //      );
     //      await this.page.waitForTimeout(3000);
     // }

     async verifyAccountOpened() {
          await expect(
               this.page.locator(
                    '#openAccountResult'
               )
          ).toContainText(
               'Congratulations'
          );
     }


     async verifyNewAccountNumberVisible() {
          await expect(
               this.newAccountNumber.first()
          ).toBeVisible();

          await expect(
               this.newAccountNumber.first()
          ).not.toHaveText('');
     }
}
export default OpenAccountPage;