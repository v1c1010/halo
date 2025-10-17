import { test, expect } from "@playwright/test";
import { PracticeFormPage } from "../src/pages/form.page";
import { userData } from "../src/utils/testData";

test.describe("DemoQA Practice Form", () => {
  let formPage: PracticeFormPage;

  test.beforeEach(async ({ page }) => {
    formPage = new PracticeFormPage(page);
    await formPage.navigateToForm();
  });

  //Form Test - happy path with all valid information and success 
  test("TC_01 - Correct Form functionality - Fill and submit valid form", async () => {
    await formPage.fillForm(userData);
    await formPage.submitForm();
    await formPage.expectSuccessModal();
  });

  //Basic Form Test for negative scenario - Click on submit without form interaction
  test("TC_02 - Submitting empty form to validate mandatory fields and error messages", async ({ page }) => {
    await formPage.submitForm();
    const errorField = page.locator("#firstName:invalid");
    await expect(errorField).toBeVisible();
  });

  //Ramdom scenario where hobbies are clicked 
  test("TC_03 - Select dynamic subject and hobbies after fill form correctly", async ({ page }) => {
    await formPage.fillForm(userData);
    await formPage.subjectInput.fill("English");
    await page.keyboard.press("Enter");
    await formPage.hobbiesMusic.click();
    await formPage.submitForm();
  });
});
