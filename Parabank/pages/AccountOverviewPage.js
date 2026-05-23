import { expect } from '@playwright/test';



class AccountOverviewPage {
    constructor(page) {
        this.page = page;
        this.accountOverviewLink = page.locator('text=Accounts Overview');
        this.accountTable = page.locator('#accountTable');
        this.accountNumbers = page.locator('#accountTable a');
        this.accountBalances = page.locator(
                '#accountTable tbody tr td:nth-child(2)'
            );

        this.availableBalances = page.locator( '#accountTable tbody tr td:nth-child(3)');
        this.accountRows = page.locator('#accountTable tbody tr');
        this.transactionLinks = page.locator('#accountTable a');
        this.pageTitle = page.locator('h1.title');
        this.logoutLink = page.locator('text=Log Out');
    }
    async gotoAccountsOverview() {
        await this.accountOverviewLink.click();
    }

    async verifyAccountsOverviewPage() {
        await expect(this.pageTitle)
            .toContainText(
                'Accounts Overview'
            );
    }

    // ASSERTION
    // VERIFY ACCOUNT TABLE VISIBLE
    async verifyAccountTableVisible() {
        await expect(this.accountTable)
            .toBeVisible();
    }

    // ASSERTION
    // VERIFY ACCOUNT NUMBERS DISPLAYED
    async verifyAccountNumbersVisible() {
        await expect(
            this.accountNumbers.first()
        ).toBeVisible();
    }

    // ASSERTION
    // VERIFY ACCOUNT BALANCES DISPLAYED
    async verifyBalancesVisible() {
        await expect(
            this.accountBalances.first()
        ).toBeVisible();
    }

    // ASSERTION
    // VERIFY AVAILABLE BALANCES DISPLAYED
    async verifyAvailableBalancesVisible() {
        await expect(
            this.availableBalances.first()
        ).toBeVisible();
    }

    // ASSERTION
    // VERIFY MULTIPLE ACCOUNTS PRESENT
    async verifyMultipleAccounts() {
        const count =
            await this.accountRows.count();
        expect(count).toBeGreaterThan(0);
    }


    // ASSERTION
    // VERIFY TRANSACTION LINKS PRESENT
    async verifyTransactionLinksVisible() {
        await expect(
            this.transactionLinks.first()
        ).toBeVisible();
    }

    // GET FIRST ACCOUNT BALANCE
    async getFirstAccountBalance() {
        return await this
            .accountBalances
            .first()
            .textContent();
    }


    // GET FIRST ACCOUNT NUMBER
    async getFirstAccountNumber() {
        return await this
            .accountNumbers
            .first()
            .textContent();
    }

    // CLICK FIRST ACCOUNT
    async clickFirstAccount() {
        await this
            .accountNumbers
            .first()
            .click();
    }

    // PARAM ASSERTION
    // VERIFY URL
    async verifyOverviewURL() {
        await expect(this.page)
            .toHaveURL(/overview.htm/);
    }


    // SESSION VALIDATION
    async refreshPage() {
        await this.page.reload();
    }


    // LOGOUT FUNCTION

    async logout() {
        await this.logoutLink.click();
    }
}
export default AccountOverviewPage;