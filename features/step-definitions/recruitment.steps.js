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
  await recruitmentPage.addCandidate(testData.candidate.fName,testData.candidate.lName,testData.candidate.email);
});

Then("the candidate should be added successfully", async function () {
  await recruitmentPage.isVisible();
});

