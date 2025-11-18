import { Locator, Page } from '@playwright/test';


export class CompleteOrderPage 
{
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;
  readonly successMsg: Locator;  

constructor(page: Page) 
{
  this.page = page;
  this.firstName = page.locator('#first-name');
  this.lastName = page.locator('#last-name');
  this.postalCode = page.locator('#postal-code');
  this.continueBtn = page.locator('#continue');
  this.finishBtn = page.locator('#finish');
  this.successMsg = page.locator('.complete-header');
}

  async fillCheckoutDetails() 
  {
    await this.firstName.fill('John');
    await this.lastName.fill('Doe');
    await this.postalCode.fill('12345');
    await this.continueBtn.click();
  }


async finishOrder() 
{
  await this.finishBtn.click();
}


  async isOrderSuccessful() 
  {
    // Return text content for assertion
    if (await this.successMsg.isVisible()) {
        return await this.successMsg.textContent();
    }
    return null;
  }

}