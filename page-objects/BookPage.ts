import { Locator, Page, expect } from '@playwright/test'

export class BookPage {
  readonly page: Page
  readonly bookTitle: Locator
  readonly bookPrice: Locator
  readonly bookAgregarBtn: Locator

  constructor(page) {
    this.page = page
    this.bookTitle = page.locator('//h1')
    this.bookPrice = page.locator('')
    this.bookAgregarBtn = page.locator('')
  }
}
