@Login @Regression

Feature: User Authentication tests

    Background: Login Scenario
        Given  User navigates to website

    Scenario: Login - Valid Credentials
        When The user clicks on login account.
        And user enter username as "smnizamani@gmail.com" and password as "123456"
        Then "My Account" section should be displayed - SUCCESS

    Scenario: Login - Invalid Credentials
        When The user clicks on login account.
        And user enter username as "123" and password as "321"
        Then Error message should be visible - FAILURE





