// actions_tests.spec.ts
import { test } from "@playwright/test";

test("Click Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("[type='submit']").click(); // Xpath: //button[@type='submit']
});

test("Fill a pressSequentially Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("Start");
  // ? fill vždy přepíše stávající hodnotu pole, text "Start" přepíše na "End"
  await page.locator("#username").fill("End");
  // ? pressSequentially - nemaže obsah pole, ale píše za něj postupně
  await page.locator("#username").pressSequentially("Kde toto bude?");
  // ? metoda clear maže obsah pole
  await page.locator("#username").clear();
  await page
    .locator("#username")
    .pressSequentially("Píšu pomalu", { delay: 500 });
});

test("Select Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  // ! Explicitní čekání 2.000 ms (2 s), snažíme se nepoužívat, zpomaluje testy!
  await page.waitForTimeout(2000);
  // ? Výběr hodnoty (option) ze selectu pomocí value: <option value="male">
  await page.locator("#gender").selectOption("male");
  // ? Výběr hodnoty (option) ze selectu pomocí viditelného textu: <option>Female</option>
  await page.locator("#gender").selectOption({ label: "Female" });
});

test("Radio, Checkbox check() Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  // ? Zakliknutí radio
  await page.locator("#contact-phone").check();
  // ? Zakliknutí checkboxu
  await page.locator("#interests-music").check();
  // ? Odkliknutí checkboxu
  await page.locator("#interests-music").uncheck();
});

test("iframe Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  // ! prvek #name je v iframe, nemůžeme se na něj přímo odkázat
  // await page.locator("#name").fill("Text v iframe");
  // ? page.frameLocator se přepíná do iframe pomocí jeho lokátoru a vrací nám nový kontext (obsah iframe) jako výsledek, tento výsledek uložíme do proměnné (v tomto případě const iframe) a následně můžeme obsah iframe ovládat právě pomocí této proměnné.
  const iframe = await page.frameLocator(
    '[data-testid="test-automation-iframe"]'
  );
  // ? Identifikuje pole #name v iframe a vyplní do něj text
  await iframe.locator("#name").fill("Text v iframe");
});

test("Hover Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  // ? Najede na box, počká 500 ms a pak klikne na nově zobrazenou zprávu hover-message
  await page.locator('[data-testid="hover-box"]').hover();
  await page.waitForTimeout(500);
  await page.locator('[data-testid="hover-message"]').click();
});
