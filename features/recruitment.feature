# features/recruitment.feature
Feature: Recruitment functionality

 @sanity @positive 
  Scenario: Add a new candidate successfully
    Given user logged in and navigate to recruitment
    When the user adds a candidate
    Then verify candidate is added successfully

 @sanity @positive @current
  Scenario: Add a new Vacancies successfully
    Given user logged in and navigate to recruitment
    When the user adds the vacancies
    Then verify vacancies is added successfully

#   @regression @negative
#   Scenario: Add candidate with missing mandatory fields
#     When the recruiter adds a candidate with only name "Emma Green" and no email
#     Then an error message "Email is required" should be displayed

#   @regression @negative
#   Scenario: Add candidate with invalid email
#     When the recruiter adds a candidate with name "Liam Grey", email "liam.grey@invalid", and job title "QA Engineer"
#     Then an error message "Enter a valid email address" should be displayed


