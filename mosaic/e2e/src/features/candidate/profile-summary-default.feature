Feature: View candidate profiles of all candidates
To verify client able to view the candidate profiles for all candidates created for specific client

  Background: 
    Given The user is on the candidate profiles page for all candidates
  
  @Desktop
  Scenario: To verify client able to view profiles of all candidates created for the client
     When The client sees profiles of all candidates
  
  Scenario: To verify the default information displayed
     When client sees Candidate first name and last name
        And Client sees Level
        And Client sees Departure City and State
        And client sees Destination City and State
        And Client sees Status
  
    Scenario: To verify sort of all columns available in summary
       When Client clicks on Candidate name sort
       Then The candidate name should be sortable
       When Client clicks on Level sort
       Then The Level should be sortable
       When Client clicks on Departure City and State sort
       Then The Departure City and State should be sortable
       When Client clicks on Destination City and State sort
       Then The Destination City and State should be sortable
       When Client clicks on Status sort
       Then The Status should be sortable

  
  Scenario: To verify client able to inactivate candidate record
     When Client inactivates a candidate record
  
  Scenario: To verify if client able to navigate to a candidate profile
     When Client navigates to a candidate profile
     Then Client sees the candidate profile
  
