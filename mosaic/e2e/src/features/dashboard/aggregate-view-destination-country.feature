Feature:  Aggregate view of dashboard for destination Country

  Background: I want to see aggregate data displayed on my dashboard, so that I can view the summary information most important to me.
    Given I am a logged in as a user looking at the Aggregate dashboard
    When I am on the Employee dashboard - Aggregate Destination Country

  @desktop
  #Aggregate view of dashboard template for Destination Country in Desktop Browser
  Scenario: User navigates the site and views the aggregated dashboard - desktop: MCP-61
    Then I see an area where the aggregate page content will be displayed
    #Then I see a Dashboard View configuration module
    #And I can click on the settings icon
    #And I select aggregation view destination country option
    Then I am returned to the dashboard with the aggregated view visible
    And I see a placeholder for KPIs at the top of the screen
    And I see Country in the Dashboard Data displayed
    And I see Number of active employees that are being aggregated
    And I see Total YTD costs for the aggregated employees
    And I see Prior YTD costs for the aggregated employees
    And I see Percentage change of the costs year over year




  @mobile
  #Aggregate view of dashboard template for Destination Country in Mobile Browser
  Scenario: User navigates the site and views the aggregated dashboard - Mobile: MCP-61
    Then I see a mobile area where the aggregate page content will be displayed
    #Then I see a mobile Dashboard View configuration module
    #And I can click on the mobile settings icon
    #And I select mobile aggregation view destination country option
    Then I am returned to the mobile dashboard with the aggregated view visible
    And I see a placeholder for KPIs at the top of the mobile screen
    And I see Country in the Dashboard Data displayed in mobile
    And I see Number of active employees that are being aggregated in mobile
    And I see Total YTD costs for the aggregated employees in mobile
    And I see Prior YTD costs for the aggregated employees in mobile
    And I see Percentage change of the costs year over year in mobile


