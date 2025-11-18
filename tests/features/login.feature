Feature: Login
Scenario: Successful login
Given user is on login page
When user logs in with username "standard_user" and password "secret_sauce"
Then user should be on products page