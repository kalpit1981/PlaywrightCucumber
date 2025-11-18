import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly checkoutBtn: Locator;

  constructor(page: Page)
  {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutBtn = page.locator('#checkout');

  }

  async verifyItemCount(expected: number): Promise<number>
  {
    const items = await this.cartItems.elementHandles();
    return items.length;
  }

  async clickCheckout() 
  {
    await this.checkoutBtn.click();
  }

}