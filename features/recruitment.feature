# features/recruitment.feature
Feature: Recruitment functionality

 @sanity @positive 
  Scenario: Add a new candidate successfully
    Given user logged in and navigate to recruitment
    When the user adds a candidate
    Then verify candidate is added successfully

 @sanity @positive 
  Scenario: Add a new Vacancies successfully
    Given user logged in and navigate to recruitment
    When the user adds the vacancies
    Then verify vacancies is added successfully

  @regression @negative
  Scenario: Add candidate with missing mandatory fields
    Given user logged in and navigate to recruitment
    When the recruiter adds a candidate without mandatory fields
    Then an error message 'Required' should be displayed

  @regression @negative
  Scenario: Add candidate with invalid email
    Given user logged in and navigate to recruitment
    When the recruiter adds a invalid email address
    Then an error message 'Expected format: admin@example.com' should be displayed


