Feature: Complete Order

Scenario: Finish checkout successfully
Given user is on checkout overview page
When user completes the order
Then order success message should be "Thank you for your order!"