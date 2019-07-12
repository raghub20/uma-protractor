Feature: Auto Complete Component for Text Fields

To verify client gets suggestions in a drop-down while typing into any text field  

Background:

Given The user navigates to add candidate page

@Desktop

Scenario: To verify user gets suggestion for auto complete in departure field

When The user enters 'city' on departure and sees related text words in a drop down

Then The user can select the related word suggestion having searched text 'City' in departure

Scenario: To verify user gets suggestion for auto complete in destination field

When The user enters 'city' on destination and sees related text words in a drop down

Then The user can select the related word suggestion having searched text 'city' in destination