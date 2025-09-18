// src/pages/recruitment.page.js
const { BasePage } = require("./base.page");
const { expect } = require('@playwright/test');

class RecruitmentPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = "input[name='username']";
    this.passwordInput = "input[name='password']";
    this.loginBtn = "button[type='submit']";
    this.addCandidatebtn = "button:has-text('Add')";
    this.fNameInput ="input[name='firstName']";
    this.lNameInput ="input[name='lastName']";
    this.candidateVacancyInput="div.oxd-select-text-input",
    this.emailInput = "input[placeholder='Type here'] >> nth=0";
    this.saveBtn = "button[type='submit']";
    this.vNameInput="input.oxd-input.oxd-input--active";
    this.jTitleInput="div.oxd-select-text-input";
    this.hManagerInput="input[placeholder='Type for hints...']";

    }

  async login(username, password) {
    await this.page.waitForSelector(this.usernameInput);
    await this.type(this.usernameInput, username);
    await this.type(this.passwordInput, password);
    await this.click(this.loginBtn);
  }


  async addCandidate(fName, lname, candidateVacancy, email){
    await this.click(this.addCandidatebtn)
    await this.type(this.fNameInput, fName);
    await this.type(this.lNameInput,lname);
    await this.selectDropdown(this.candidateVacancyInput, candidateVacancy)
    await this.type(this.emailInput, email);
    await this.click(this.saveBtn);

  }

    async addVacancies(vName, jTitle, hManager){
    await this.click(this.addCandidatebtn)
    await this.page.locator(this.vNameInput).nth(1).fill(vName);
    //await this.type(this.vNameInput, vName);
    await this.selectDropdown(this.jTitleInput, jTitle);
    await this.selectFromAutocomplete(this.hManagerInput, hManager);
    await this.click(this.saveBtn);

  }
  
  async verifyCandidate(expectedName){
  const nameLocator = this.page.locator("//label[text()='Name']/../following-sibling::div/p");
  await expect(nameLocator).toHaveText(new RegExp(expectedName));
  }

  async getErrorMessage() {
    await this.page.waitForSelector(this.errorMsg);
    return this.getText(this.errorMsg);
  }

}

module.exports = { RecruitmentPage };
