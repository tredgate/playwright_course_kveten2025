import { test } from "@playwright/test";

test("Cvičení: Contact Us", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html");
  await page.locator("#full-name").fill("Petr Tester");
  await page.locator("#email").fill("petr@example.org");
  await page.locator("#contact-date").fill("2025-12-26");
  await page.locator("#role").selectOption("instructor");
  await page.locator("#comments").fill("Komentář 1 2 3, bla bla");
  await page.locator("#newsletter").check();
  await page.locator('[data-testid="button-submit"]').click();
});
