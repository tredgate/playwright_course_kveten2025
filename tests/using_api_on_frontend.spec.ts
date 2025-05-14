// using_api_on_frontend.spec.ts;

import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Spojení API a frontend testů", async ({ page }) => {
  const username = faker.internet.username();
  const password = faker.internet.password();
  const email = faker.internet.exampleEmail();

  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com/register");
  await page.locator('[data-testid="username-input"]').fill(username);
  await page.locator('[data-testid="email-input"]').fill(email);
  await page.locator('[data-testid="password-input"]').fill(password);
  // ? Zapneme poslouchám na doručení response registrační API
  const responsePromise = page.waitForResponse(/\/tegb\/register/);
  await page.locator('[data-testid="submit-button"]').click();
  // ? Počkej, až se odchytí (dokončí) HTTP s /tegb/register a ulož výsledek response do proměnné
  const response = await responsePromise;
  const responseBody = await response.json();
  expect(responseBody.username).toBe(username);
  expect(responseBody.email).toBe(email);
  expect(responseBody.userId).toBeDefined();
  expect(typeof responseBody.userId).toBe("number");
  expect(responseBody.updatedAt).toBe(null);
  expect(typeof responseBody.active).toBe("number");
});
