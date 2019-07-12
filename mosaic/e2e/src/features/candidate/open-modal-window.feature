Feature: Open modal window of candidate profile

To verify client able to open modal window of candidate profile

Background:
Given The client is on the candidate profile summary page

Scenario: To verify Invitation Sent - Resend modal window
When The client clicks “Invitation Sent - Resend” status record of any candidate
Then The client is able to see modal window for invitation resend

Scenario: To verify Ready for Review modal window
When The client clicks “Ready for Review” status record of any candidate
Then The client is able to see modal window for ready for review

Scenario: To verify non clickable status
Then “Assessment In Progress” status is not a hyperlink
Then “Invitation Not Sent” status is not a hyperlink
Then “Pending Van Line Quote” status is not a hyperlink


