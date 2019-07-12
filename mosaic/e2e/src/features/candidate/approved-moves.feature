Feature: Monitor relocation journey from transferee profiles view
As a client’s contact, I can view the all the transferee profiles created by me or assigned to my client #
  Background: 
    Given the User Navigates to Transferee’s Profile View
  @Desktop
  
    Scenario Outline: Verify the information presented in the transferee’s profile view
       Then the Full Name is displayed 
       And Departure is displayed 
       And Destination is displayed
       And Status is dispalyed 
       And Authorized Amount  is displayed
       And search box is displayed 
       And search for item as "<searchitem>"
       Examples:
       | searchitem | 
       | 75,000  | 
     # And enter authorized amount
     Scenario: Verify the ability to sort the data
     # When the user clicks on sort symbol on Field Name
      #Then the list is sorted the Field Name
      When the user clicks on sort symbol on AuthorizationAmount
      Then the list is sorted field AuthorizationAmount
      When the user clicks on sort symbol on field Departure
      Then the list is sorted field Departure
      When the user clicks on sort symbol on field Desination
      Then the list is sorted field Destination
      When the list clicks on sort symbol on field status
      And the list is sorted field Status
      And click the arrow to see pages
      And click the Next Pages
  #   Scenario: Navigate to Individual Approved Moves
  #      When the user clicks on Approved record
  #      Then the user sees the Approved Moves
  
