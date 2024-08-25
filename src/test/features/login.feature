Feature: User Authentication tests

    Background: Login Scenario
        Given  User navigates to website
        And User click on form menu
        And User click on login menu

    Scenario: Login should be successfull
        And user enter username as "admin@admin.com"
        And user enter password as "admin123"
        When user clicks on submit button
        Then login should be successfull

    Scenario: Login should not be successfull
        And user enter username as "123"
        And user enter password as "321"
        When user clicks on submit button
        But login should be failing    