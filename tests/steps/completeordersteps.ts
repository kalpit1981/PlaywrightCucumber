import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('user is on checkout overview page', async ({ loginPage, productsPage, cartPage, completeOrderPage }) => {
  await loginPage.goto();
  await loginPage.login('Username', 'Password'); // Pass env variable keys, not actual values
  await productsPage.addAllProductsToCart();
  await productsPage.goToCart();
  await cartPage.clickCheckout();
  await completeOrderPage.fillCheckoutDetails();
});

When('user completes the order', async ({ completeOrderPage }) => {
  await completeOrderPage.finishOrder();
});

Then('order success message should be {string}', async ({ completeOrderPage }, expectedMessage) => {
  const successMessage = await completeOrderPage.isOrderSuccessful();
  expect(successMessage).toEqual(expectedMessage);
});