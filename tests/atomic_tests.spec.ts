import { test, expect } from "@playwright/test";
import { LoginPageFluent } from "../pages/fluent/login_page_fluent.ts";
import { DashboardPageAtomic } from "../pages/atomic/dashboard_page_atomic.ts";

test.describe("Homepage Atomic Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = await new LoginPageFluent(page);
    await loginPage
      .openPmtool()
      .then((login) => login.login("playwright_jaro24", "Playwright!2024"));
  });

  test("Top bar checks", async ({ page }) => {
    const dashboardPage = new DashboardPageAtomic(page);
    await expect.soft(dashboardPage.profileButton).toBeVisible();
    await expect.soft(dashboardPage.headerTitle).toBeVisible();
    await expect.soft(dashboardPage.bellIcon).toBeVisible();
    await expect
      .soft(dashboardPage.headerTitle)
      .toContainText("TEG Project Management");
  });

  test("Left menu checks", async ({ page }) => {
    const dashboardPage = new DashboardPageAtomic(page);
    await expect.soft(dashboardPage.dashboard).toBeVisible();
    await expect.soft(dashboardPage.projects).toBeVisible();
    await expect.soft(dashboardPage.users).toBeVisible();
    await expect.soft(dashboardPage.reports).toBeVisible();
    await expect.soft(dashboardPage.configuration).toBeVisible();
    await expect.soft(dashboardPage.applicationStructure).toBeVisible();
    await expect.soft(dashboardPage.extension).toBeVisible();
    await expect.soft(dashboardPage.tools).toBeVisible();
    await expect.soft(dashboardPage.documentation).toBeVisible();
    await expect.soft(dashboardPage.logo).toBeVisible();
    await expect.soft(dashboardPage.dashboard).toContainText("Dashboard");
    await expect.soft(dashboardPage.projects).toContainText("Projects");
    await expect.soft(dashboardPage.users).toContainText("Users");
    await expect.soft(dashboardPage.reports).toContainText("Reports");
    await expect
      .soft(dashboardPage.configuration)
      .toContainText("Configuration");
    await expect
      .soft(dashboardPage.applicationStructure)
      .toContainText("Application Structure");
    await expect.soft(dashboardPage.extension).toContainText("Extension");
    await expect.soft(dashboardPage.tools).toContainText("Tools");
    await expect
      .soft(dashboardPage.documentation)
      .toContainText("Documentation");
  });

  test("Content checks", async ({ page }) => {
    const dashboardPage = await new DashboardPageAtomic(page);
    await expect.soft(dashboardPage.contentHeader).toBeVisible();
    await expect
      .soft(dashboardPage.contentHeader)
      .toHaveText("Vítej v testovací aplikaci Tredgate Project");
    await expect.soft(dashboardPage.firstParagraph).toBeVisible();
    await expect
      .soft(dashboardPage.firstParagraph)
      .toContainText(
        "Tato aplikace slouží pro trénink Software Testování a Automatizace testování"
      );
    await expect.soft(dashboardPage.secondParagraph).toBeVisible();
    await expect
      .soft(dashboardPage.secondParagraph)
      .toContainText(
        "Pokud budeš mít jakékoliv problémy, kontakuj Petra na: petr.fifka@tredgate.cz"
      );
  });
});
