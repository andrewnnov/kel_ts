import { test } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'

test.describe.only('Buy book', async () => {
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.visit()
    await page.pause()
  })

  test.only('Click to Fiction', async (page) => {
    await homePage.chooseCategoryFiction()
  })
})
