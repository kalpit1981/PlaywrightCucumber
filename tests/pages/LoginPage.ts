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


async login(Username: string, Password: string) 
{
    // Resolve the actual values from process.env using the keys passed from feature file
    const usernameValue = process.env[Username];
    const passwordValue = process.env[Password];

    // Log for debugging (optional)
    console.log(`Attempting login with ${Username}=${usernameValue}, ${Password}=${passwordValue}`);

    if (!usernameValue) {
        throw new Error(`Environment variable '${Username}' is not defined or empty`);
    }
    
    if (!passwordValue) {
        throw new Error(`Environment variable '${Password}' is not defined or empty`);
    }

    await this.username.fill(usernameValue);
    await this.password.fill(passwordValue);
    await this.loginBtn.click();
}


async getErrorMessage(): Promise<string | null> {
    return await this.errorMessage.textContent();
}
}