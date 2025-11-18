Feature: Login

Scenario Outline: Login functionality for valid and invalid users
Given user is on login page
When user logs in with username "<username>" and password "<password>"
Then login outcome should be "<expected_result>"

Examples:
  | username         | password       | expected_result                                      |
  | standard_user    | secret_sauce   | Product label is visible                             |
  | locked_out_user  | secret_sauce   | Epic sadface: Sorry, this user has been locked out.  |