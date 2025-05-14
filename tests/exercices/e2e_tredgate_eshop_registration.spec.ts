// e2e_tredgate_eshop_registration.spec.ts
import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("E2E: registrace v Tredgate Eshopu", async ({ page }) => {
  const firstName = "Petr";
  const lastName = "Test";
  // ? Vytváření náhodného čísla
  //   const randomNumber = Math.round(Math.random() * 10000);
  //     const randomEmail = randomNumber + "@example.com";
  //     console.log(randomEmail);
  const email = faker.internet.exampleEmail();
  const phone = "123456789";
  const password = "123456";

  console.log("Vygenerovaný e-mail: " + email);

  await page.goto("https://tredgate.com/eshop");
  await page.locator('[title="My Account"]').click();
  await page.locator("//a[contains(@href, 'account/register')]").click();
  await page.locator("#input-firstname").fill(firstName);
  await page.locator("#input-lastname").fill(lastName);
  await page.locator("#input-email").fill(email);
  await page.locator("#input-telephone").fill(phone);
  await page.locator("#input-password").fill(password);
  await page.locator("#input-confirm").fill(password);
  await page.locator("[name='agree']").check();
  await page.locator('[type="submit"]').click();
  await expect(page.locator("h1")).toHaveText("Your Account Has Been Created!");
});
