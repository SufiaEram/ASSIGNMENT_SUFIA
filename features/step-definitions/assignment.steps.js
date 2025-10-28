 // features/step-definitions/bbc-assignment.steps.js
const { Given, When, Then } = require("@cucumber/cucumber");
const { Assignment } = require("../../src/pages/assignment");
const { testData } = require("../../src/utils/test-data");

let assignment;

Given("Login to the URL with valid userId and password", async function (){

 assignment = new Assignment(global.page);
 await assignment.navigateTo("https://www.saucedemo.com/");
 await assignment.loginFunc(testData.validUser.username,testData.validUser.password);
    
});

When("select the higgest priced item and add to cart", async function (){
 await assignment.highestPrice();
});

Then("verify item is added to cart", async function (){
     await assignment.navigateToCart();
     await assignment.verifyItemInCart();


});