// src/pages/recruitment.page.js
const { BasePage } = require("./base.page");

class RecruitmentPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = "input[name='username']";
    this.passwordInput = "input[name='password']";
    this.loginBtn = "button[type='submit']";
    this.errorMsg = ".oxd-alert-content-text"; // correct selector for OrangeHRM
    this.addCandidatebtn = "button=[name='Add']";
    this.fNameInput ="input[name='firstName']";
    this.lNameInput ="input[name='lastName']";
    this.emailInput ="input[placeholder='Type here']";
    this.saveBtn = "button[type='submit']";

  }

  async login(username, password) {
    await this.page.waitForSelector(this.usernameInput);
    await this.type(this.usernameInput, username);
    await this.type(this.passwordInput, password);
    await this.click(this.loginBtn);
  }


  async addCandidate(fName, lname, email){
    await this.click(this.addCandidatebtn)
    await this.page.waitForSelector(this.fName);
    await this.type(this.fNameInput, fName);
    await this.type(this.lNameInput,lname);
    await this.type(this.emailInput, email);
    await this.click(this.saveBtn);

  }


  async getErrorMessage() {
    await this.page.waitForSelector(this.errorMsg);
    return this.getText(this.errorMsg);
  }

}

module.exports = { RecruitmentPage };
