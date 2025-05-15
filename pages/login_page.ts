import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool";
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator(".btn");
  }

  async openPmtool() {
    await this.page.goto(this.url);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
