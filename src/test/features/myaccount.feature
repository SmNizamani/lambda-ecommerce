@MyAccount

Feature: User Authentication tests

    Background: User wants to edit account information.
        Given  User navigates to website.
        And User has signed into the web application.
    Scenario: Name Change Scenario
        Given User clicks on Edit Account Information.
        When User edit name field with "John Doe".
        And User clicks on submit button.
        Then Success Message should be displayed.

    Scenario: Add new address.
        Given User clicks on Edit Account Information.
        When User edit name field with "".
        And User clicks on submit button.
        Then Error Message should be displayed.

