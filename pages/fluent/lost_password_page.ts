import { Locator, Page } from "@playwright/test";
import { LoginPageFluent } from "./login_page_fluent.ts";

export class LostPasswordPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly emailInput: Locator;
  readonly sendButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.emailInput = page.locator('input[name="email"]');
    this.sendButton = page.locator(".btn-info");
  }

  async resetPassword(
    username: string,
    email: string
  ): Promise<LoginPageFluent> {
    await this.usernameInput.fill(username);
    await this.emailInput.fill(email);
    await this.sendButton.click();
    return new LoginPageFluent(this.page);
  }
}
