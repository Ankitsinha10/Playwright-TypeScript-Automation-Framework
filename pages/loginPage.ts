import {type Page, type Locator} from '@playwright/test'

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;
    readonly loggedInUsername: Locator
    readonly bookStoreApplicationButton: Locator


    constructor(page:Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('UserName')
        this.passwordInput = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', {name : /login/i})
        this.logoutButton = page.getByRole('button', {name: /log\s?out/i})
        this.loggedInUsername = page.locator('#userName-value')
        this.bookStoreApplicationButton = page.getByRole('link', {name: 'Book Store Application'});
    }

    async fillUsername(username: string) {
        await this.usernameInput.fill(username)
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password)
    }

    async clickLoginButton () {
        await this.loginButton.click()
    }

    async completeLogin (username: string, password: string) {
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickLoginButton()
        await this.page.waitForURL('**/profile', {waitUntil: 'load'})
    }

    async clickLogoutButton () {
        await this.logoutButton.waitFor({state: 'visible'})
        await this.logoutButton.click()
    }

    async navigateToLogin() {
        await this.page.goto('https://demoqa.com/', {waitUntil: 'domcontentloaded'})
        await this.bookStoreApplicationButton.waitFor({state: 'visible'})
        await this.bookStoreApplicationButton.click()
        await this.page.waitForLoadState('domcontentloaded')
        await this.loginButton.waitFor({state:'visible'})
        await this.loginButton.click();
    }

    async validateLogin(expectedUsername: string) {
        await this.loggedInUsername.waitFor({state: 'visible'});
        const usernameText = await this.loggedInUsername.textContent()
        return usernameText?.trim() === expectedUsername
    }

}