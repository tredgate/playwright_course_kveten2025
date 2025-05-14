//asserts_tests.spec.ts
import { test, expect } from "@playwright/test";

test("Prvek obsahuje část textu", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("[type='submit']").click();

  // ? Varianta identifikace prvku přímo v expectu
  await expect(page.locator("#welcome-page-header")).toContainText(
    "Vítej v testovací aplikaci"
  );

  // ? Variantu uložení lokátoru do proměnné a následné předání do expectu.
  const welcomePageHeader = page.locator("#welcome-page-header");
  await expect(welcomePageHeader).toContainText("Vítej v testovací aplikaci");
});

test("Kontrola celého textu", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("[type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  );
});

test("Kontrola viditelnosti", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  const loginLogo = page.locator(".login-page-logo img");
  await expect(loginLogo).toBeVisible();
});

test("Kontrola hodnoty pole", async ({ page }) => {
  const username = "TEST";
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill(username);
  await expect(page.locator("#username")).toHaveValue(username);
});

test("toBeChecked test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await expect(page.locator("input[value='option-3']")).toBeChecked();
});

test("toBeDisabled test", async ({ page }) => {
  await page.goto("http://tredgate.com/webtrain/registration.html");
  await expect(page.locator("#occupation")).toBeDisabled();
});

test("Měkké kontroly (soft asserts)", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await expect.soft(page.locator(".form-title")).toHaveText("Login Pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("[type='submit']").click();
});

test("Negativní test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await expect(page.locator(".alert-danger")).not.toBeVisible();
});
