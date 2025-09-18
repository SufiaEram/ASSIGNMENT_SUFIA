 // features/step-definitions/recruitment.steps.js
const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { RecruitmentPage } = require("../../src/pages/recruitment.page");
const { testData } = require("../../src/utils/test-data");

let recruitmentPage;

Given("user logged in and navigate to recruitment", async function () {

  recruitmentPage = new RecruitmentPage(global.page);
  await recruitmentPage.navigateTo("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await recruitmentPage.login(testData.validUser.username,testData.validUser.password);
  await recruitmentPage.click("a:has-text('Recruitment')");

});

When("the user adds a candidate", async function () {

  await recruitmentPage.click("a:has-text('Candidates')");
  await recruitmentPage.addCandidate(testData.candidate.fName,testData.candidate.lName,testData.candidate.candidateVacancy,testData.candidate.email);

});

Then("verify candidate is added successfully", async function () {

  await recruitmentPage.verifyCandidate(testData.candidate.fName);

});

When("the user adds the vacancies", async function () {

  await recruitmentPage.click("a:has-text('Vacancies')");
  await recruitmentPage.addVacancies(testData.Vacancies.vName,testData.Vacancies.jtitle,testData.Vacancies.hManager);

});

Then("verify vacancies is added successfully", async function () {
  // skip
});

When("the recruiter adds a candidate without mandatory fields", async function () {

  await recruitmentPage.click("a:has-text('Candidates')");
  await recruitmentPage.click("button:has-text('Add')");
  await global.page.waitForTimeout(500);
  await recruitmentPage.click("button[type='submit']");
  

});

Then("an error message 'Required' should be displayed", async function () {

  this.errorMsgInput = "span.oxd-input-field-error-message";
  await recruitmentPage.validateErrorMsg(this.errorMsgInput,testData.MandatoryErrMsg.errMsg,0);
  await recruitmentPage.validateErrorMsg(this.errorMsgInput,testData.MandatoryErrMsg.errMsg,1);
  await recruitmentPage.validateErrorMsg(this.errorMsgInput,testData.MandatoryErrMsg.errMsg,2);
 
});

Then("an error message 'Expected format: admin@example.com' should be displayed", async function () {

  this.errorMsgInput = "span.oxd-input-field-error-message";
  await recruitmentPage.validateErrorMsg(this.errorMsgInput,testData.MandatoryErrMsg.errMsg2,2);
 
});

When("the recruiter adds a invalid email address", async function () {

  await recruitmentPage.click("a:has-text('Candidates')");
  await recruitmentPage.click("button:has-text('Add')");
  await recruitmentPage.page.locator("input[placeholder='Type here']").nth(0).fill("qwerty");
  await recruitmentPage.click("button[type='submit']");


});