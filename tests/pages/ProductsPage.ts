import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly productSort: Locator;
  readonly productPrices: Locator;
  readonly productNames: Locator;
  readonly addToCartButtons: Locator;
  readonly cartLink: Locator;
  readonly cartQuantity: Locator;


  constructor(page: Page) {
    this.page = page;
    this.productSort = page.locator('.product_sort_container');
    this.productPrices = page.locator('.inventory_item_price');
    this.productNames = page.locator('.inventory_item_name');
    this.addToCartButtons = page.locator('[data-test^="add-to-cart"]');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartQuantity = page.locator('.shopping_cart_badge');
  }


  async sort(option: string) {
    await this.productSort.selectOption(option);
  }

  async addAllProductsToCart() {
    const buttons = await this.addToCartButtons.elementHandles();
    for (const button of buttons) {
      await button.click();
    }
  }

  async addNProductsToCart(n: number) {
    const buttons = await this.addToCartButtons.elementHandles();
    for (let i = 0; i < Math.min(n, buttons.length); i++) {
      await buttons[i].click();
    }
  }

  async getCartQuantity(): Promise<string | null> {
    return await this.cartQuantity.textContent();
  }

  async goToCart() {
    await this.cartLink.click();
  }

}