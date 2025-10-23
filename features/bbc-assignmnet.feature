# features/assignment.feature
Feature: bbc assignment

 @sanity @positive 
  Scenario: loging in and verifying homepage is vissible
    Given user navigate to URL and click on sign in button 
    When the user enters its registered username and continue
    Then verify user is logged in




