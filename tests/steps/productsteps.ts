import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('user is logged in', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('Username', 'Password'); // Pass env variable keys, not actual values
});

When('user sorts products by {string}', async ({ productsPage }, option) => {
  await productsPage.sort(option);
});

Then('products should be sorted in ascending price', async ({ productsPage }) => {
  const prices = await productsPage.productPrices.evaluateAll((els: Element[]) =>
    els.map(e => parseFloat((e as HTMLElement).textContent!.replace('$', '')))
  );
  const sorted = [...prices].sort((a, b) => a - b);
  console.log(prices, sorted);
  expect(prices).toEqual(sorted);
});

Then('products should be sorted alphabetically by name', async ({ productsPage }) => {
  const names = await productsPage.productNames.evaluateAll((els: Element[]) =>
    els.map(e => (e as HTMLElement).textContent)
  );
  const sorted = [...names].sort();
  console.log(names, sorted);
  expect(names).toEqual(sorted);
});

Given('user is on products page', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('Username', 'Password'); // Pass env variable keys, not actual values
});

When('user adds {string} products to cart', async ({ productsPage }, count) => {
    await productsPage.addNProductsToCart(parseInt(count));
});

Then('cart quantity should show {string} items', async ({ productsPage }, expectedCount) => {
    const actualCount = await productsPage.getCartQuantity();
    console.log(actualCount, expectedCount);
    expect(actualCount).toEqual(expectedCount);
});