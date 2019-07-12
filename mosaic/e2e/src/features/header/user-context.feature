Feature:  User Context
  
  Background:  As a user I want a consistent method to navigate anywhere within the site
    Given I am a logged in user looking for my avatar
     When I am on a page in the site

  #Display User Context - Desktop
  Scenario: User views current context - desktop: MCP-100
    Then I see an avatar for the logged in user
     And I see the name of the logged in user

  #Display User Context - Mobile
  Scenario: User does not view current context - mobile: MCP-100
    Then I do not see an avatar for the logged in user
     And I do not see the name of the logged in user