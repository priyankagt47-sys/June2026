Feature: OrangeHRM - Add User

Background:
  Given user navigates to url
  When user enters username "Admin"
  When user enters password "admin123"
  And user clicks on the login button
  
Scenario Outline: Add a new user from Admin -> User Management
  When user clicks on Admin module
  And user clicks on Add button
  And user selects user role "<userRole>"
  And user enters employee name "<employeeName>"
  And user enters add username "<username>"
  And user selects status "<status>"
  And user enters password "<password>" and confirm password "<confirmPassword>"
  And user clicks on Save button
  #Then user should see success message

Examples:
  | userRole | employeeName     | username   | status  | password   | confirmPassword |
  | Admin    | John  Agentic    | testuser1  | Enabled | Test@1234  | Test@1234       |
  | ESS      | James  Butler    | testuser2  | Enabled | Pass@1234  | Pass@1234       |
