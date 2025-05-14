//test-structure-tests.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Pmtool přihlašovací testy @smoke", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/pmtool/");
  });

  test("Úspěšné přihlášení do Pmtool", async ({ page }) => {
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator("[type='submit']").click();
    await expect(page.locator("#welcome-page-header")).toHaveText(
      "Vítej v testovací aplikaci Tredgate Project"
    );
  });

  test("Neúspěšné přihlášení do Pmtool", async ({ page }) => {
    await page.locator("#username").fill("abcd");
    await page.locator("#password").fill("4321");
    await page.locator("[type='submit']").click();
    await expect(page.locator(".alert-danger")).toBeVisible();
  });
});
