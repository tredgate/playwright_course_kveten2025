// api_tests.spec.ts
import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("GET HTTP Request", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("GET HTTP Request s URL parametrem", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 3,
    },
  });
});

test("GET HTTP Request s hlavičkou", async ({ request }) => {
  await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/header",
    {
      headers: {
        train: "umim posilat requesty",
      },
    }
  );
});

test("POST HTTP Request s body", async ({ request }) => {
  const username = faker.internet.username();
  const password = faker.internet.password();
  const email = faker.internet.exampleEmail();

  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username: username,
        password: password,
        email: email,
      },
    }
  );
});

test("Předávání dat mezi requesty", async ({ request }) => {
  const username = faker.internet.username();
  const password = faker.internet.password();
  const email = faker.internet.exampleEmail();

  // ? Registrace uživatele, výsledek requestu uložíme do proměnné
  const registerResponse = await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username: username,
        password: password,
        email: email,
      },
    }
  );
  // ? Vytažení JSON těla (body) z response
  const registerResponseBody = await registerResponse.json();
  // ? výpis a naformátování response do konzole
  console.log(JSON.stringify(registerResponseBody, null, 2)); // JSON.stringify formátuje objekty a JSON do čitelné formy
  // ? Vytažení property userId z JSON response a uložení do proměnné
  const userId = registerResponseBody.userId;

  // ? Získání informací o uživateli z předchozího req.
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: userId,
    },
  });
});

/*
Cvičení (⌛7:00):
Vytvořte volání API v Playwright:
Složka: projekt/tests/exercises
Test: regres_in_register_test.spec.ts
Request:
Metoda: POST
URL: https://reqres.in/api/register
Body (data):
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
Header:
Accept-Encoding: gzip, deflate, br

*/
