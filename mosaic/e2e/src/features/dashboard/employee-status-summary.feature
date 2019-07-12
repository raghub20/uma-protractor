Feature:  Status Summary

  Background: As an HR Mobility Manager I want to see a list of move information about each employee
    Given I am logged in as the HR Mobility Manager
     When I navigate to the Dashboard page
  
  @desktop
  
  #Verify title at the top of the page
  Scenario Outline: Title at the top of the page verification
     Then Title of the page should be My Dashboard

  #Verify title of the employee details table
  Scenario: Title of employee details table verification
     Then The table having employee details should have the title Employee Details


  #Display of Desktop Status Summary
  Scenario: User Navigates to the desktop Status Summary Grid:  MCP-13
     Then I see a grid displaying status summary information
  
  Scenario Outline: User can see the desktop view of specific move status information: MCP-13
     Then I see the "employeeName"
      And I see the "fileNumber" for the Employee
      And I see the "employeeID"
      #Move Phase will eventually be replaced with a symbol
      And I see the "movePhaseNumber"
      And I see a "policyName"
      And I see a "departureLocation"
      And I see a "destinationLocation"
      And I see the "effectiveTransferDate"
      And I see the "totalCostOfMove" with Billing Currency Code

      Examples:
      employeeName      | fileNumber | employeeID | movePhaseNumber | policyName        | departureLocation | destinationLocation | effectiveTransferDate | totalCostOfMove
      Martine McDaniels | 3016124    | 437481     | 3               | Business Traveler | Norway            | Canada              | 01-Feb-2019           | 3555 USD

#Status Summary Departure Location - state/province/canton
  Scenario Outline: User sees state-province-canton information if available for Departure Location: MCP-13
     Then I see the Departure Location with state-province-canton if available "deptLocWithSPC"

     Examples:
     deptLocWithSPC
     Swindon
  
  Scenario Outline: User does NOT see state-province-canton information for Departure Location when not available: MCP-13
     Then I see the Departure Location with no state-province-canton when not available "deptLocNoSPC"

     Examples:
     deptLocNoSPC
     Vaud
     
  
  #Status Summary Destination Location - state/province/canton
  Scenario Outline: User sees state-province-canton information if available for Destination Location: MCP-13
     Then I see the Destination Location with state-province-canton if available "destLocWithSPC"

     Examples:
     destLocWithSPC
     Vaud
  
  Scenario Outline: User does NOT see state-province-canton information for Destination Location when not available: MCP-13
     Then I see the Destination Location with no state-province-canton when not available "destLocNoSPC"

     Examples:
     destLocNoSPC
     Vaud
  

  #Move Phase Alt Text – NOTE: Move Phase will initially be displayed as a number but will eventually change
  Scenario: User sees alt text for the Move Phase
     # alt text when the Move Phase Indicator is 1: Current Move Phase is 1 of 5: Pre-Policy Call
     Then I see the alt text for Pre-Policy Call
     # alt text when the Move Phase Indicator is 2: Current Move Phase is 2 of 5: Preparing to Relocate
      And I see the alt text for Preparing to Relocate
     # alt text when the Move Phase Indicator is 3: Current Move Phase is 3 of 5: Arriving in New Location
      And I see the alt text for Arriving in New Location
     # alt text when the Move Phase Indicator is 4: Current Move Phase is 4 of 5: Living in New Location and Ongoing Assignment
      And I see the alt text for Living in New Location
     # alt text when the Move Phase Indicator is 5: Current Move Phase is 5 of 5: Living in New Location and Settled
      And I see the alt text for Living in New Location and Settled