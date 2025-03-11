import { Page } from '@playwright/test';
import { gotoLoginPage, login, isLoginErrorVisible } from '../utilities/auth0Utilities';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await gotoLoginPage(this.page);
    }

    async login(username: string, password: string) {
        await login(this.page, username, password);
    }

    async isLoginErrorVisible(): Promise<boolean> {
        return await isLoginErrorVisible(this.page);
    }
}