Feature: Login

Scenario Outline: Login functionality for valid and invalid users
Given user is on login page
When user logs in with username "<username>" and password "<password>"
Then login outcome should be "<expected_result>"

Examples:
  | username        | password        | expected_result                                      |
  | Username        | Password        | Product label is visible                             |
  | invalidUsername | Password        | Epic sadface: Sorry, this user has been locked out.  |
  | Username        | invalidPassword | Epic sadface: Username and password do not match any user in this service |