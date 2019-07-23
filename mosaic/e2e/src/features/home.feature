Feature: Home

    Background: As a user I want to visit the home page so I can view help cards.
        Given I am a user
        When I visit the home page

    @desktop
    Scenario: I see the desktop view of the home page
        Then I see the home page
        And I see the title

    @mobile
    Scenario: I see the mobile view of the home page
        Then I see the home page
        And I see the title
