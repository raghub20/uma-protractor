
Feature: Filter columns in candidate profile summary

To verify filtered columns are displayed in profile summary
  Background: 
    Given The client contact is on candidate profile summary page
  
  Scenario: To verify client contact able to filter the columns to see all fields in candidate profile summary
  
     When The client contact clicks the column filter icon
     Then The client contact is able to see column filter pop up
     Then The client contact checks level column as true
      And The client contact checks departure as true
      And The client contact checks destination as true
      And The client contact checks status date as true
      And The client contact checks business unit as true
      And The client contact checks invitation sent date as true
      And The client contact checks created by as true
      And The client contact checks Email as true
      And The client contact clicks apply filter
     Then The client contact is able to see level column
      And The client contact is able to see departure column
      And The client contact is able to see destination column
      And The client contact is able to see status date column
      And The client contact is able to see business unit column
      And The client contact is able to see invitation sent date column
      And The client contact is able to see created by column
      And The client contact is able to see Email column
  
  Scenario: To verify client contact able to filter and remove columns in candidate profile summary
  
     When The client contact clicks the column filter icon
     Then The client contact is able to see column filter pop up
      And The client contact checks all the columns true
     Then The client contact checks level column as false
      And The client contact checks departure as false
      And The client contact checks destination as false
      And The client contact checks status date as false
      And The client contact checks business unit as false
      And The client contact checks invitation sent date as false
      And The client contact checks created by as false
      And The client contact checks Email as false
      And The client contact clicks apply filter
     Then The client contact does not see level column
      And The client contact does not see departure column
      And The client contact does not see destination column
      And The client contact does not see status date column
      And The client contact does not see business unit column
      And The client contact does not see invitation sent date column
      And The client contact does not see created by column
      And The client contact does not see Email column
  
  Scenario: To verify client contact able to uncheck fullname
     When The client contact clicks the column filter icon
     Then The client contact is able to see column filter pop up
     Then The client contact is unable to uncheck fullname
  
  Scenario: To verify client contact able to uncheck status
     When The client contact clicks the column filter icon
     Then The client contact is able to see column filter pop up
     Then The client contact is unable to uncheck status
  
  Scenario: To verify the number of columns selected
  
     When The client contact clicks the column filter icon
      And All the check box are unchecked
     Then The client contact checks level column as true
      And The client contact verifies selected columns
     Then The client contact checks departure as true
      And The client contact verifies selected columns
     Then The client contact checks destination as true
      And The client contact verifies selected columns
     Then The client contact checks status date as true
      And The client contact verifies selected columns
     Then The client contact checks business unit as true
      And The client contact verifies selected columns
     Then The client contact checks invitation sent date as true
      And The client contact verifies selected columns
     Then The client contact checks created by as true
      And The client contact verifies selected columns
     Then The client contact checks Email as true
      And The client contact verifies selected columns
  
  Scenario: To verify the number of columns unselected
  
     When The client contact clicks the column filter icon
      And The client contact checks all the columns true
     Then The client contact checks level column as false
      And The client contact verifies unselected columns
      And The client contact checks departure as false
      And The client contact verifies unselected columns
      And The client contact checks destination as false
      And The client contact verifies unselected columns
      And The client contact checks status date as false
      And The client contact verifies unselected columns
      And The client contact checks business unit as false
      And The client contact verifies unselected columns
      And The client contact checks invitation sent date as false
      And The client contact verifies unselected columns
      And The client contact checks created by as false
      And The client contact verifies unselected columns
      And The client contact checks Email as false
      And The client contact verifies unselected columns
  
  Scenario: To verify working of reset
  
     When The client contact clicks the column filter icon
      And The client contact checks business unit as true
      And The client contact checks Email as true
      And The client contact clicks reset button
      And The client contact clicks apply filter
     Then The client contact is able to see firstname column
      And The client contact is able to see status column
      And The client contact is able to see level column
      And The client contact is able to see departure column
      And The client contact is able to see destination column
      And The client contact does not see status date column
      And The client contact does not see business unit column
      And The client contact does not see invitation sent date column
      And The client contact does not see created by column
      And The client contact does not see Email column
  
  Scenario: To verify the first and last columns
  
     When The client contact clicks the column filter icon
      And The client contact checks business unit as true
      And The client contact checks Email as true
      And The client contact clicks apply filter
     Then The first column is full name
      And The last column is status
  
  
