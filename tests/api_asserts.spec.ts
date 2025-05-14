// api_asserts.spec.ts
import { expect, test } from "@playwright/test";

test("Assert response 200", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/454"
  );
  expect(response.status(), "Response status je 200").toBe(200);
});

test("Assert hlavičky", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/454"
  );
  // ? Vytažení hlaviček z response
  const headers = response.headers();
  // ? Vytáhnutí konkrétní hlavičky content-type z hlaviček (v hranatých závorkách, protože se jedná o mapu)
  const contentType = headers["content-type"];
  // ? Kontrola hlavičky
  expect(contentType).toBe("application/json; charset=utf-8");
  expect(contentType).toContain("application/json;");
});

test("Assert těla (body) response", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/454"
  );
  const responseBody = await response.json();

  // ? Kontrola, že createdAt existuje v response
  expect(responseBody.createdAt).toBeDefined();

  // ? Kontrola, že userId je číslo a username je text
  expect(typeof responseBody.userId).toBe("number");
  expect(typeof responseBody.username).toBe("string");

  // ? Kontrola hodnot: username = Gracie_Runolfsson93, userId = 454
  expect(responseBody.userId).toBe(454);
  expect(responseBody.username).toBe("Gracie_Runolfsson93");
});

/*
 Cvičení (⌛10:00):
Ve složce exercise vytvořte nový test soubor: 	
Vytvořte volání API v playwright na https://tegb-backend-877a0b063d29.herokuapp.com/train
Metoda: PATCH (request.patch)
Otestujte, že timestamp je text, id = 1

 */
