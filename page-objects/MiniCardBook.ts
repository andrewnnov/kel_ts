import { Locator, Page, expect } from '@playwright/test'
import { HomePage } from './HomePage'

export class MiniCardBook {
  readonly page: Page
  readonly miniBook: Locator
  readonly bookTitle: Locator
  readonly bookPrice: Locator
  readonly addBookToCartBtn: Locator

  constructor(page) {
    this.page = page
    this.miniBook = page.locator('//article')
    this.bookTitle = page.locator('//a//h3')
    this.bookPrice = page.locator('//article/div[3]/div/div')
    this.addBookToCartBtn = page.locator("//span[text()='AGREGAR']")
  }

  addBookToCart = async () => {
    await this.addBookToCartBtn.waitFor()
    await this.addBookToCartBtn.click()

    //await this.page.pause()
  }
}
