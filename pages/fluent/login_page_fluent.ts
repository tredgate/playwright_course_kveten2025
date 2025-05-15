import { Locator, Page } from "@playwright/test";
import { DashboardPageFluent } from "./dashboard_page_fluent.ts";
import { LostPasswordPage } from "./lost_password_page.ts";

export class LoginPageFluent {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool";
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly lostPasswordButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator(".btn");
    this.lostPasswordButton = page.locator("#forget_password");
  }

  async clickLostPassword(): Promise<LostPasswordPage> {
    await this.lostPasswordButton.click();
    return new LostPasswordPage(this.page);
  }

  async openPmtool(): Promise<LoginPageFluent> {
    await this.page.goto(this.url);
    return this;
  }

  async login(
    username: string,
    password: string
  ): Promise<DashboardPageFluent> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    return new DashboardPageFluent(this.page);
  }
}
