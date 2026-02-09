import {type Page, type Locator} from '@playwright/test'

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;
    readonly loggedInUsername: Locator


    constructor(page:Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('UserName')
        this.passwordInput = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', {name : /login/i})
        this.logoutButton = page.getByRole('button', {name: /log\s+out/i})
        this.loggedInUsername = page.locator('#userName-value')
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
    }

    async clickLogoutButton () {
        await this.logoutButton.click()
    }

    async navigateToLogin() {
        await this.page.goto('https://demoqa.com/login', {waitUntil: 'domcontentloaded'} )
    }

    async validateLogin(expectedUsername: string) {
        await this.loggedInUsername.waitFor({state: 'visible'});
        const usernameText = await this.loggedInUsername.textContent()
        return usernameText?.trim() === expectedUsername
    }

}