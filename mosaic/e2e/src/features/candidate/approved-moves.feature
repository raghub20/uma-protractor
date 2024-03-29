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
  And User will verify "Authorized/Remaining Amount" header is displayed
  And User will verify search box is displayed
 

  @SR_50
  Scenario Outline: Verify sorting of the data present in summary
  When User will do "<Sort Type>" sort of approved moves table by clicking on "<Header Name>" header
  Then User will verify the "<Sort Type>" sorted data for the header "<Header Name>"
  And User will wait for "5" seconds
  Examples:
  | Header Name               | Sort Type     |
  | Destination               | asceding      |
  | Destination               | descending    |
  | Departure                 | asceding      |
  | Departure                 | descending    |
  | Status                    | asceding      |
  | Status                    | descending    |
  |Authorized/Remaining Amount| asceding      |
  |Authorized/Remaining Amount| descending    |

@SR_50
Scenario Outline: Verify Search functionality of approved moves
When User will enter "<Search Item>" in search box
Then User will verify "<Search Item>" is showing in approved moves table

Examples:
| Search Item |
| 20,000      |           
  