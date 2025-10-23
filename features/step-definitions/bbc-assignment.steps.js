 // features/step-definitions/bbc-assignment.steps.js
const { Given, When, Then } = require("@cucumber/cucumber");
const { AssignmentBBC } = require("../../src/pages/assignmentBBC");
const { testData } = require("../../src/utils/test-data");

let assignmentBBC;

Given("user navigate to URL and click on sign in button" ,async function(){
  
assignmentBBC = new AssignmentBBC(global.page);
await assignmentBBC.navigateTo("https://www.bbc.co.uk");
await assignmentBBC.click('text="Sign in"');

});

When("the user enters its registered username and verify loging in",async function(){

//Enter user name and password 
await assignmentBBC.loginBBC(testData.validUser.username,testData.validUser.password);
//Verify sucess login 
await assignmentBBC.verifyText('For you');

});

Then("logged in user navigates to article with comment and verifies" ,{ timeout: 30_000 },async function(){

  //Select the header 
  await assignmentBBC.selectHeader("Sport");

  //Get the article with comment
  await assignmentBBC.findArticleWithComment();
  await page.waitForTimeout(5000);

  // clicking on the comment section 
  const commentSection = page.locator('[data-testid*="comments"], #comments, .comments').first();
  await commentSection.click();
  
  //verifying the comments section is visible 
  const expectedComent = page.getByText('Join the conversation');
  await assignmentBBC.isVisible(expectedComent);
  
});
