import { test } from "@playwright/test";
import { LoginPageFluent } from "../../pages/fluent/login_page_fluent.ts";

test("Lost Password Test", async ({ page }) => {
  const loginPage = new LoginPageFluent(page);
  await loginPage
    .openPmtool()
    .then((login) => login.clickLostPassword())
    .then((lostPassword) =>
      lostPassword.resetPassword(
        "lost_password_user",
        "lost_password@tredgate.cz"
      )
    );
});
