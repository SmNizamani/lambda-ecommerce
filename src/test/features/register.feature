@RegisterUser @Regression

Feature: Verify that the user is able to register an account.

    User enters their details to register an account.

    Background: User is landed on the webpage.
        Given The user lands at the webpage.

    Scenario: User is able to register an account.
        When The user clicks on register account.
        And The user enters "<FirstName>", "<LastName>", "<Email>", "<Phone>", "<Password>", "<ConfirmPassword>".
        And The user agrees to privacy policy.
        Then User clicks the continue button.

        Examples:
            | FirstName  | LastName  | Email                | Password       |
            | FacadeUser | UserFace  | facade23@gmail.com   | facading123!@  |
