import { test, expect } from "@playwright/test";

test("Kontrola chybových hlášek", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("[type='submit']").click();
  await expect(page.locator("#username-error")).toBeVisible();
  await expect(page.locator("#password-error")).toBeVisible();
});

test("Kontrola neexistence chybových hlášek", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  // ? Ověření, že je stránka skutečně načtená
  await expect(page.locator(".form-title")).toHaveText("Login");
  await expect(page.locator("#username-error")).not.toBeVisible();
  await expect(page.locator("#password-error")).not.toBeVisible();
});
