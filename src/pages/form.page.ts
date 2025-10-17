import { Page, Locator, expect } from "@playwright/test";

export class PracticeFormPage {
  public page: Page;
  public firstName: Locator;
  public lastName: Locator;
  public email: Locator;
  public genderMale: Locator;
  public mobile: Locator;
  public subjectInput: Locator;
  public hobbiesMusic: Locator;
  public uploadPicture: Locator;
  public address: Locator;
  public submitButton: Locator;
  public successModal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.email = page.locator("#userEmail");
    this.genderMale = page.locator("label[for='gender-radio-1']");
    this.mobile = page.locator("#userNumber");
    this.subjectInput = page.locator("#subjectsInput");
    this.hobbiesMusic = page.locator('xpath=//*[@id="hobbiesWrapper"]/div[2]/div[3]/label');
    this.uploadPicture = page.locator("#uploadPicture");
    this.address = page.locator("#currentAddress");
    this.submitButton = page.locator("#submit");
    this.successModal = page.locator("#example-modal-sizes-title-lg");
  }

  async navigateToForm() {
    await this.page.goto("/automation-practice-form");
  }

  async fillForm(data: any) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);
    await this.genderMale.click();
    await this.mobile.fill(data.mobile);
    await this.subjectInput.fill(data.subject);
    await this.hobbiesMusic.click();
    await this.uploadPicture.setInputFiles("tests/data/image.png");
    await this.address.fill(data.address);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async expectSuccessModal() {
    await expect(this.successModal).toHaveText("Thanks for submitting the form");
  }
}
