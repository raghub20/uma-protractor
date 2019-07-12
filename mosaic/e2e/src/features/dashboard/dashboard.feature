Feature: Dashboard

    Background: As a user I want to visit the dashboard so I can view it.
        Given I am a user
        When I visit the dashboard

    @desktop
    Scenario: I see the desktop view of the dashboard
        Then I see the title

    @mobile
    Scenario: I see the mobile view of the dashboard
        Then I see the title
    