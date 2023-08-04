import { test } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'

test.describe.parallel.only('Buy book', async () => {
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.visit()
    //await page.pause()
  })

  test.only('Click to Kids - Pockets', async () => {
    //await homePage.chooseCategoryFiction()
    await homePage.choseCategoryWithParam('Kids', 'Pockets')
  })

  test.only('Click to Fiction - Fantasy', async () => {
    //await homePage.chooseCategoryFiction()
    await homePage.choseCategoryWithParam('Fiction', 'Fantasy')
  })

  test.only('Click School Book - Skills', async () => {
    //await homePage.chooseCategoryFiction()
    await homePage.choseCategoryWithParam('School Books', 'Skills')
  })
})
