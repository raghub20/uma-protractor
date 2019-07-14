Feature: Feature: Monitor relocation journey from transferee profiles view
As a client’s contact, I can view the all the transferee profiles created by me or assigned to my client #

Background: 
  Given the User Navigates to Transferee’s Profile View

  @SR_50
  Scenario: Verify Full Name, Departure, Destination, Authorized, Status headers are displayed
  Then User will verify "Full Name" header is displayed
  And User will verify "Departure" header is displayed
  And User will verify "Destination" header is displayed
  And User will verify "Status" header is displayed
  And User will verify "Authorized Amount" header is displayed
  And User will verify search box is displayed
  And User will wait for "5" seconds

  Scenario: Verify sorting of the data present in summary
  When User will do "asceding" sort of approved moves table by clicking on "Full Name" header