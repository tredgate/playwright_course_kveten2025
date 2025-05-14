// failing_tests.spec.ts
import { expect, test } from "@playwright/test";

test.skip("Failing Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  // ! Vždy spadne
  const name = "Uvidíme toto v Debugu";
  await expect(page.locator("#not_existing"), "Viditelnost loga").toBeVisible();
});
