Feature: Candidate profile updation by client

    #To verify client able to update a candidate profile

    Background:

        Given The update user is on the candidate profile updation page selects a candidate profile

    @Desktop

    Scenario: To verify The update user can update fields in the candidate update page

        When The update user clears First Name field and The update user moves to Next Field

        Then The update user shown with error message You must enter first name

        Then The update user enters special characters in the firstname

        Then The update user shown with error message Special characters not allowed

        Then The update user enters valid username

    Scenario: To verify the Last Name field in the candidate update page is required

        When The update user clears Last Name field and The update user moves to Next Field

        Then The update user shown with error message You must enter last name

        Then The update user enters special characters in the lastname

        Then The update user shown with error message Special characters not allowed

        Then The update user enters valid Last Name

    Scenario: To verify the email field in the candidate update page is required

        When The update user clears email field and The update user moves to Next Field

        Then The update user shown with error message You must enter email

        Then The update user enters Invalid Email

        Then The update user shown with error messageenter valid email

        Then The update user enters Valid Email

    Scenario: To verify The update user can update level field in the candidate update page

        When The update user updates level field

        #Then The update user selects a new value

    Scenario: To verify The update user can update Bussiness unit in the candidate update page

        When The update user clears Bussiness Unit

        Then The update user can enter a new value in Bussiness Unit


    Scenario: To verify The update user able to update Departure

        When The update user clears departure field

        Then The update user is able to enter or select departure field

    Scenario: To verify The update user able to update Destination

        When The update user clears destination field and The update user moves to Next Field

        Then The update user shown with error message You must enter destinaiton

        Then The update user is able to enter or select destination field

    # Scenario: Cancel Candidate profile updation

    #     When The update user clicks Cancel button

    #     Then The candidate creation process cancelled

    # Scenario: Send Invite on Candidate profile updation

    #     When The update user clicks Send Invite button

    #     Then The invite sends and page updates

