import { test } from "@playwright/test";

test("Cvičení: Otevření Projektů v Pmtool", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("[type='submit']").click(); // Xpath: //button[@type='submit']
  await page.locator("#Projects").click();
});
