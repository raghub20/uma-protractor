Feature: Logout

  Background: As a user I need the ability to log out to exit my session
  
    Given I am a logged in user who wants to log out
     When I am on any page where log out is accessible
  
  @desktop
  #Display log out option - Desktop
  Scenario: User has the ability to log out - Desktop: MCP-101
     Then I can select the desktop log out option and I am redirected to logout
  
  @mobile
  #Display log out option - Mobile
  Scenario: User has the ability to log out - Mobile: MCP-101
     Then I can select the mobile log out option and I am redirected to logout
     