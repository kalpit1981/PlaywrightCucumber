import { test as base } from "playwright-bdd";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { CompleteOrderPage } from "../pages/CompleteOrderPage";

type Fixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  completeOrderPage: CompleteOrderPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  completeOrderPage: async ({ page }, use) => {
    const completeOrderPage = new CompleteOrderPage(page);
    await use(completeOrderPage);
  }
});
export { expect } from "@playwright/test";