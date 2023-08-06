import { test } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'

test.describe.parallel.only('Buy book', async () => {
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.visit()
    //await page.pause()
  })

  test('Click to Kids - Pockets', async () => {
    //await homePage.chooseCategoryFiction()
    await homePage.choseCategoryWithParam('Kids', 'Pockets')
  })

  test('Click to Fiction - Fantasy', async () => {
    //await homePage.chooseCategoryFiction()
    await homePage.choseCategoryWithParam('Fiction', 'Fantasy')
  })

  test('Click School Book - Skills', async () => {
    //await homePage.chooseCategoryFiction()
    await homePage.choseCategoryWithParam('School Books', 'Skills')
  })

  test.only('Find the book isbn', async () => {
    await homePage.findOneBookForParameter('9780000001043')
  })

  test.only('Find the book Name', async () => {
    await homePage.findOneBookForParameter(
      'OWL IN A TOWEL - Usborne Phonics Readers',
    )
  })
})
