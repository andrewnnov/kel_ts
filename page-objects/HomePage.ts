import { Locator, Page, expect } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly searchBookTextField: Locator
  readonly searchBookBtn: Locator
  readonly cartBtn: Locator
  readonly ingresarBnt: Locator
  readonly listOfCategory: Locator
  readonly fantasyCategoryFiction: Locator

  constructor(page) {
    this.page = page
    this.searchBookTextField = page.locator("//input[@id='downshift-15-input']")
    this.searchBookBtn = page.locator("//div[@class='w-100 flex']//button")
    this.cartBtn = page.locator("//div[@role='presentation']//button")
    this.ingresarBnt = page.locator("//div[@class='relative']//button")

    this.listOfCategory = page.locator(
      "//div[text()='Fiction']/ancestor::ul/li//div//div",
    )
  }

  visit = async () => {
    await this.page.goto('https://www.kelediciones.com/')
    await this.page.waitForURL('https://www.kelediciones.com/')
  }

  moveToCart = async () => {
    await this.cartBtn.waitFor()
    await this.cartBtn.click()
  }

  choseCategoryWithParam = async (category: string, subcategory: string) => {
    await this.page.locator(`//div[text()='${category}']`).waitFor()
    await this.page.locator(`//div[text()='${category}']`).hover()
    await this.page.locator(`//a[@title='${subcategory}']`).waitFor()
    await this.page.locator(`//a[@title='${subcategory}']`).click()
  }
}
