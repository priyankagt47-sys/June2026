Feature:OrangeHRM Login

Background:
  Given user navigates to url
  
  #@Regression
  Scenario: Login with valid credentials
    When user enters username "Admin" 
    When user enters password "admin123"
    And user clicks on the login button
    Then user should see the dashboard page

    #if we want to pass multiple test data for the same scenario then we can use scenario outline and examples keyword in feature file

  #Scenario Outline: Login with invalid credentials
   # When user enters username "<username>" 
   # When userenters password "<password>"
    #And user clicks on the login button
    #Then user should see the error message as Invalid credentials 

    #Examples:
     #| username   | password   |
     #| ADMIN123   | admin123   |
     #| Admin123   | ADMIN123   |
     #| ADMIN123   | ADMIN123   |  


      #OR

   #@Smoke 
  #Scenario: Login with invalid username with UC+numbers and valid password
   #When user enters username "ADMIN123" 
   #When userenters password "admin123"
   #And user clicks on the login button
   #Then user should see the error message as Invalid credentials 
  
  #Scenario: Login with valid username and invalid password with UC+numbers
    #When user enters username "Admin123" 
    #When userenters password "ADMIN123"
    #And user clicks on the login button
    #Then user should see the error message as Invalid credentials

  #Scenario: Login with invalid username with UC+numbers and invalid password with UC+numbers
   #When user enters username "ADMIN123" 
    #When userenters password "ADMIN123"
    #And user clicks on the login button
    #Then user should see the error message as Invalid credentials 

    #how to give comments in feature file
    