Feature: Login as a client contact to the application

  # To verify the login as an existing client contact

  @desktop
  Scenario: To verify successful login
    When The user is on the login page
    Then The user sees a username field
    Then The user sees a password field
    Then The user sees a submit button
   
  #Scenario: To verify the username field
    Then The user enters a text in the username field
    Then The user sees the username
   
  #Scenario: To verify the password field
    Then The user enters a text in the password field
    Then The user sees the password
    
  Scenario Outline: To verify successful login
    When The user is on the login page
    Then I enter Username as "<username>" and Password as "<password>"
    Then The user is successfully logged in
    Examples:
      | username | password |
      | Admin  | Admin  |

  @mobile
  Scenario: To verify successful login for mobile
    When The user is on the mobile login page
    Then The user sees a username field
    Then The user sees a password field
    Then The user sees a submit button
   
  #Scenario: To verify the username field
    Then The user enters a text in the username field
    Then The user sees the username
   
  #Scenario: To verify the password field
    Then The user enters a text in the password field
    Then The user sees the password
    
  Scenario Outline: To verify successful login for mobile
    When The user is on the mobile login page
    Then I enter Username as "<username>" and Password as "<password>"
    Then The user is successfully logged in
    Examples:
      | username | password |
      | Admin  | Admin  |

  