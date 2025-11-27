import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('user has added products to cart', async ({ loginPage, productsPage }) => {
  await loginPage.goto();
  await loginPage.login('Username', 'Password'); // Pass env variable keys, not actual values
  await productsPage.addNProductsToCart(3);
});

When('user views the cart', async ({ productsPage }) => {
  await productsPage.goToCart();
});

Then('cart should contain {string} products', async ({ cartPage }, expectedCountString) => {
  const expectedCount = parseInt(expectedCountString);
  const actualCount = await cartPage.verifyItemCount(expectedCount);
  expect(actualCount).toEqual(expectedCount);
});