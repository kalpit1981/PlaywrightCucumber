Feature: Products Sorting and Cart Verification

Scenario: Sort products by price and name
Given user is logged in
When user sorts products by "lohi"
Then products should be sorted in ascending price

Scenario: Sort products by name
Given user is logged in
When user sorts products by "az"
Then products should be sorted alphabetically by name

Scenario: Verify added product count
Given user is on products page
When user adds "3" products to cart
Then cart quantity should show "3" items