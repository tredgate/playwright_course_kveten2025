import { expect, Locator, Page } from "@playwright/test";
import { LoginPageFluent } from "./login_page_fluent.ts";

export class DashboardPageFluent {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;
  readonly bellIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.bellIcon = page.locator("#user_notifications_report .fa-bell-o");
  }

  async logout(): Promise<LoginPageFluent> {
    await expect(this.bellIcon).toBeVisible();
    await this.profileButton.click();
    await this.logoutButton.click();
    return new LoginPageFluent(this.page);
  }
}
