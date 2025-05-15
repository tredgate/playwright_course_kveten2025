// page_objects_tests.spec.ts

import { test } from "@playwright/test";
import { LoginPage } from "../pages/login_page.ts";
import { DashboardPage } from "../pages/dashboard_page.ts";
import { LoginPageFluent } from "../pages/fluent/login_page_fluent.ts";

test("Page Object Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.openPmtool();
  await loginPage.login("playwright_jaro24", "Playwright!2024");
  await dashboardPage.logout();
});

test("Page Object s Fluent API Test", async ({ page }) => {
  const loginPage = new LoginPageFluent(page);
  await loginPage
    .openPmtool()
    .then((login) => login.login("playwright_jaro24", "Playwright!2024"))
    .then((dashboard) => dashboard.logout())
    .then((login) => login.login("playwright_jaro24", "Playwright!2024"));
});
/*
Vytvořte nový test na ztrátu hesla (exercises/lost_password_tests.spec.ts)
Vytvořte nový Page Object pro stránku ztráta hesla (lost_password_page.ts)
Vytvořte akce v novém objektu:
Vyplnění username (lokátor: input[name="username"])
Vyplnění e-mailu (lokátor:  input[name="email"])
Kliknutí na Send (lokátor: .btn-info)
Upravte Page Object LoginPage (kliknutí na ztracené heslo)
Vytvořte testy:
Ztracené heslo end to end (username: lost_password_user, mail: lost_password@tredgate.cz)
Otevření stránky ztraceného hesla, návrat na login.

*/
