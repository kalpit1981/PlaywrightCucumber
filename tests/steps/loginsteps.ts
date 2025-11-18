import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('user is on login page', async ({ loginPage }) => {
  await loginPage.goto();
});

When('user logs in with username {string} and password {string}', async ({ loginPage }, username, password) => {
  await loginPage.login(username, password);
});

Then('login outcome should be {string}', async ({ loginPage }, expectedResult) => {
  if (expectedResult === 'Product label is visible') {
    // Assertion for Successful Login: check URL and the 'Products' text
    await expect(loginPage.page).toHaveURL(/.*\/inventory.html/);
    await expect(loginPage.page.getByText('Products')).toBeVisible();
  } else {
    // Assertion for Invalid Login
    const actualError = await loginPage.getErrorMessage();
    expect(actualError).toContain(expectedResult);
    await expect(loginPage.errorMessage).toBeVisible();
  }
});