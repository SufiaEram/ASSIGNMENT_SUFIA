# features/assignment.feature
Feature: mercator assignment

 @sanity @positive 
  Scenario: loging in and verifying homepage is vissible
    Given Login to the URL with valid userId and password
    When select the higgest priced item and add to cart
    Then verify item is added to cart



