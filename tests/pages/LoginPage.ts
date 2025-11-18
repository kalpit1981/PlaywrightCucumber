import { Locator, Page } from '@playwright/test';


export class LoginPage 
{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly errorMessage: Locator;

constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
}


async goto() 
{
    await this.page.goto('/');
}


async login(username: string, password: string) 
{
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
}


async getErrorMessage(): Promise<string | null> {
    return await this.errorMessage.textContent();
}
}