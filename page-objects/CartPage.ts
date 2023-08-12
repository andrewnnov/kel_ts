import { Locator, Page, expect } from '@playwright/test'

export class CartPage {
  readonly page: Page
  readonly buyBtn: Locator

  constructor(page) {
    this.page = page
    this.buyBtn = page.locator("//button[@id='proceed-to-checkout']")
  }

  completePayment = async () => {
    await this.buyBtn.waitFor()
    await this.buyBtn.click()
    await this.page.pause()
  }
}
