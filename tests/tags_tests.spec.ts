// tags_tests.spec.ts;

import { test } from "@playwright/test";

test.describe(
  "Describe se značkou",
  {
    tag: "@prvni_tag",
  },
  () => {
    test("Test 1", async ({ page }) => {
      console.log("Describe s @prvni_tag - Test 1");
    });

    test("Test  stu", async ({ page }) => {
      console.log("Describe s @prvni_tag - Test 2 s tagem: @tag_v_testu");
    });
  }
);

test.describe("Describe bez značky", () => {
  test(
    "Test 1 s tagem",
    {
      tag: "@tag_test",
    },
    async ({ page }) => {
      console.log("Describe bez značky - Test 1 s tagem: @tag_test");
    }
  );

  test("Test 2 bez tagem", async ({ page }) => {
    console.log("Describe bez značky - Test 2");
  });
});
