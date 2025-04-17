import { Page, expect, test } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  readonly username = 'standard_user';
  readonly password = 'secret_sauce';
  readonly BaseUrl = 'https://www.saucedemo.com/';

  async OpenLoginPage() {
    await this.page.goto(this.BaseUrl);
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', this.username);
    await this.page.fill('#password', this.password);
    await this.page.click('#login-button');

    await this.page.context().storageState({ path: 'auth.json' });
  }
}
