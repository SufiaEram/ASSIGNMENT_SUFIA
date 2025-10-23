# features/assignment.feature
Feature: bbc assignment

 @sanity @positive 
  Scenario: loging in and verifying homepage is vissible
    Given user navigate to URL and click on sign in button
    When the user enters its registered username and verify loging in
    Then logged in user navigates to article with comment and verifies




