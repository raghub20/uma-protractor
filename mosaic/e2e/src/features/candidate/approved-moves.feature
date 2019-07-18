Feature: Feature: Monitor relocation journey from transferee profiles view
As a client’s contact, I can view the all the transferee profiles created by me or assigned to my client #

Background: 
  Given the User Navigates to Transferee’s Profile View

  @Desktop
  Scenario: Verify Full Name, Departure, Destination, Authorized, Status headers are displayed
  Then User will verify "Full Name" header is displayed
  And User will verify "Departure" header is displayed
  And User will verify "Destination" header is displayed
  And User will verify "Status" header is displayed
  And User will verify "Authorized Amount" header is displayed
  And User will verify search box is displayed
  And User will click the Next Pages
 


  Scenario Outline: Verify sorting of the data present in summary
  When User will do "<Sort Type>" sort of approved moves table by clicking on "<Header Name>" header
  Then User will verify the "<Sort Type>" sorted data for the header "<Header Name>"
  Examples:
  | Header Name               | Sort Type     |
  | Destination               | asceding      |
  | Destination               | descending    |
  | Departure                 | asceding      |
  | Departure                 | descending    |
  | Status                    | asceding      |
  | Status                    | descending    |
  |Authorized Amount          | asceding      |
  |Authorized Amount          | descending    |
  | Full Name                 | asceding      |
  | Full Name                 | descending    |


Scenario Outline: Verify Search functionality of approved moves
When User will enter "<Search Item>" in search box
Then User will verify "<Search Item>" is showing in approved moves table

Examples:
| Search Item |
| 20,000      |

Scenario: Verify the Items per page functionality
When User will select Item per page "5" for pagination 
Then User will verify "5" items are displayed per page

@SR_157
Scenario: Verify the configuration of transferre profile summary view and default selected headers.
When User will open table column section of approved moves page
And User will wait until the table columns to load
Then User will check columns are enabled as "false"
  | Column Name |
  | Full Name   |
  | Status      |
And User will check columns are enabled as "true"
  | Column Name         |
  |Authorized Amount    |
  | Departure           |
  | Destination |
  | Last Updated Date |
  | Email |
  | Level |
  | Business Unit |
  | Created By |
  | Authorized By |
And User will click on "OK" button
And User will verify "6" headers are displayed in the approved moves table

@SR_157
Scenario Outline: Verify the approved moves table headers based on the column section
When User will open table column section of approved moves page
And User will wait until the table columns to load
And User will select the "<Columns>" from select column view
And User will click on "OK" button
Then User will verify "<Expected Header Count>" headers are displayed in the approved moves table
Examples:
| Columns | Expected Header Count |
| Last Updated Date, Email, Level, Business Unit, Created By, Authorized By | 12 |
# verifying default header count
| | 6 |
| Authorized Amount, Departure, Destination  | 3 |

#Issue in the application, hence this scenario will fail.
@SR_157
Scenario: Verify the approved moves default columns are checked after click on reset button
When User will open table column section of approved moves page
And User will wait until the table columns to load
And User will select the "Authorized Amount, Departure, Destination" from select column view
And User will click on RESET button
Then User will check columns are "unchecked"
|Column Name|
|Authorized Amount |
| Departure |
| Destination |
And User will click on "OK" button
Then User will verify "6" headers are displayed in the approved moves table
