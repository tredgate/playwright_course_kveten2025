//first_tests.spec.ts
import { test } from "@playwright/test";

test("První test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
});

/*
Cvičení (⌛3:00)
V souboru first_tests.spec.ts vyplň heslo "Playwright!2024". Selektor použij #password
*/
