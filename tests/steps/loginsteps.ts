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

Then('user should be on products page', async ({ loginPage }) => {
  await expect(loginPage.page).toHaveURL(/.*\/inventory.html/);
  await expect(loginPage.page.getByText('Products')).toBeVisible();
});