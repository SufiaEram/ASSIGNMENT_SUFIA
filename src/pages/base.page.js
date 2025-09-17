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
  
}

module.exports = { BasePage };
