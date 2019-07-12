Feature:  Template for aggregate view of dashboard

  Background: I want a structure to be used for the aggregate view of the dashboard
    Given I am a logged in user looking at the Aggragate Layout
     When I am on the Employee summary dashboard - Aggregate Layout
  
  @desktop
  #Aggregate dashboard template for Desktop Browser
  Scenario: User navigates the site and views the aggregated dashboard - desktop: MCP-205
     Then I see a defined area to display aggregate page content
      And I see a defined area to display one or more KPIs
      And I see a defined area to display search of aggregated data
      
  
  @mobile
  #Aggregate dashboard template for Mobile Browser
  Scenario: User navigates the site and views the aggregated dashboard - mobile: MCP-205
     Then I see a defined area to display aggregate mobile page content
     And I see a defined area to display one KPI
     And I see a defined area to display the mobile aggregate data search 
      

