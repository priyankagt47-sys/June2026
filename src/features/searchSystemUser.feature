Feature:OrangeHRM search system user functionality

Background:
  Given user navigates to url
    When user enters username "Admin" 
    When user enters password "admin123"
    And user clicks on the login button

  @smoke
  Scenario: Search system user with valid username
     When : user clicks on the Admin module
     When : user enters system username as "Admin"
     When : user clicks on the search button
     Then : application shows as a one result found
