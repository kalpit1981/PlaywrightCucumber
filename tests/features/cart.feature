Feature: Cart Verification

Scenario: Verify products in cart
Given user has added products to cart
When user views the cart
Then cart should contain "3" products