Feature: Candidate profile creation by client

To verify client able to create a candidate profile

  Background: 
  
    Given The user is on the candidate profile creation page
  @Desktop
  
  Scenario: To verify the candidate profile creation page
  
     Then The user sees a First Name field
  
      And The user sees a Last Name field

      And The user sees a field for Departure City or State

      And The user sees a field for Destination City or State
  
      And The user sees a select drop-down for Level
  
      And The user sees a text field for business unit
  
      And The user sees a Email field
  
      And The user sees a Save button to save the record
      
      And The user sees a Cancel button to cancel the entire process
  
      And The user sees a Send Invitation To Candidate button to send invitation

   Scenario: To verify the First Name field in the candidate profile creation page is required
  
      When The user does not enters text in the First Name field and The user moves to Next Field
  
      Then The user shown with error message You must enter first name

      Then The user enters special characters in the firstname
  
      Then The user shown with error message Special characters not allowed

      Then The user enters valid firstname

    Scenario: To verify the Last Name field in the candidate profile creation page is required
  
        When The user does not enters text in the Last Name field and The user moves to Next Field
  
        Then The user shown with error message You must enter last name

        Then The user enters special characters in the lastname

        Then The user shown with error message Special characters not allowed
  
        Then The user enters valid Last Name

   Scenario: To verify the user able to enter Departure City
  
      When The user is on add candidate
  
      Then The user is able to enter in departure field

   Scenario: To verify the user able to enter Destination City
  
      When The user clicks but does not enter in destination field

      Then The user is shown with error message

      Then The user is able to enter in destination field
  

    Scenario: To verify the user able to select level
  
       When The user does not select level and The user moves to Next Field
  
       Then The user shown with error message you must select Level
  
       Then The user selects the level

    Scenario: To verify the user able to enter the text Business Unit
  
       When The user able to enter the business unit

       And The user enters text in the business unit field

    Scenario: To verify the Email field in the candidate profile creation page is required
  
       When The user does not enters text in the Email field and The user moves to Next Field
  
       Then The user shown with error message You must enter candidate email
  
       Then The user enters Invalid Email
  
       Then The user shown with error message mail address is not in a valid format
  
       Then The user enters Valid Email
  
     Scenario: Save button visibility
  
       When The user is on add candidate page

       Then The user is able to see save draft button

     Scenario: Send Invitation to the Candidate
  
       When The user enters data in all required fields and leaves blank optional fields
  
       And The user clicks Send Invitation and The Candidate record is added to the grid

     Scenario: Cancel Candidate creation
  
       When The user clicks Cancel button
  
       Then The candidate creation process cancelled

