// src/pages/base.page.js
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  async click(selector) {
    await this.page.locator(selector).click();
  }

  async type(selector, text) {
    await this.page.locator(selector).fill(text);
  }

  async getText(selector) {
    return this.page.locator(selector).innerText();
  }

  async isVisible(selector){
    await this.page.expect(selector).toBeVisible();
  }
  
  async selectDropdown(selector, jobTitle) {
  const dropdown = this.page.locator(selector);
  await dropdown.click(); // open dropdown
  await this.page.getByRole("option", { name: jobTitle }).click(); // pick option
}

async selectFromAutocomplete(selector, text) {
  const input = this.page.locator(selector);

  // Focus and type the text
  await input.click();
  await input.fill(text);

  // Wait a tiny bit for suggestions to appear
  await this.page.waitForTimeout(5000);

  // Navigate to the first suggestion and select
  await input.press("ArrowDown");
  await this.page.waitForTimeout(500);
  await input.press("Enter");
}

async validateErrorMsg(fieldLabel, expectedMsg){

  const fieldGroup = this.page.locator('div.oxd-input-group:has(label:text("${fieldLabel}"))');
  const error = fieldGroup.locator("span.oxd-input-field-error-message");
  await error.waitFor({ state: "visible" });
  await expect(error).toHaveText(expectedMsg);
  console.log('✅ Verified mandatory message for "${fieldLabel}": ${expectedMsg}');

}

}

module.exports = { BasePage };
