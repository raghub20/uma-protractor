Feature:  Site Template
  
  Background:  As a user I want a consistent method to navigate anywhere within the site
     Given I am a logged in user looking at the site template
     When I am on the site template
     
  @desktop
  #App template for Desktop Browser
  Scenario: User navigates the site and views the structure - desktop: MCP-97
    Then I see a defined area to display page content
     And I see a visible area that will contain the site navigation
     And I see a defined area to display search
     And I see a defined area to display logged in user context on the main page

  @mobile
  #App template for Mobile Browser
  Scenario: User navigates the site and views the structure - mobile: MCP-97
    Then I see a defined area to display page content
     And I see a menu option to display the site navigation
     And I see a menu option to display the search
     And I do not see an area for the logged in user context on the main landing page