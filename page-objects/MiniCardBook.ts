import { Locator, Page, expect } from '@playwright/test'

export class MiniCardBook {
  readonly page: Page
  readonly bookTitle: Locator
  readonly bookPrice: Locator
  readonly addBookToCart: Locator

  constructor(page) {
    this.page = page
    this.bookTitle = page.locator('')
    this.bookPrice = page.locator('')
    this.addBookToCart = page.locator('')
  }
}
