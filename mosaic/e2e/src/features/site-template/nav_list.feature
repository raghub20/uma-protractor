Feature: Navigation List

    Background: As a user I want to see the website navigation list so that I can navigate the website.
        # Given I am a user
        # When I visit the dashboard
        Given I am a user of the site and want to use the navigation
        When I navigate to the dashboard so that I can see the navigation

    @desktop
    Scenario: I see the desktop view of the dashboard: MCP-98
        Then I see the desktop navigation list

    Scenario: I see the desktop view of the dashboard with the nav collapsed: MCP-98
        Then I see the collapsed desktop navigation list

    @mobile
    Scenario: I see the mobile view of the dashboard: MCP-98
        Then I see the mobile navigation list
    