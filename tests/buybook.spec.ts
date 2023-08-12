import { expect, test } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'
import { MiniCardBook } from '../page-objects/MiniCardBook'
import { CartPage } from '../page-objects/CartPage'

test.describe.parallel.only('Buy book', async () => {
  let homePage: HomePage
  let miniBook: MiniCardBook
  let cartPage: CartPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.visit()
    //await page.pause()
  })

  test('Click to Kids - Pockets', async () => {
    await homePage.choseCategoryWithParam('Kids', 'Pockets')
  })

  test('Click to Fiction - Fantasy', async () => {
    await homePage.choseCategoryWithParam('Fiction', 'Fantasy')
  })

  test('Click School Book - Skills', async () => {
    await homePage.choseCategoryWithParam('School Books', 'Skills')
  })

  test('Find the book ISBN', async () => {
    await homePage.findOneBookForParameter('9780000001043')
  })

  test('Find the book Name', async () => {
    await homePage.findOneBookForParameter(
      'OWL IN A TOWEL - Usborne Phonics Readers',
    )
  })

  test.only('Buy book and add it to cart', async ({ page }) => {
    await homePage.findOneBookForParameter(
      'OWL IN A TOWEL - Usborne Phonics Readers',
    )
    miniBook = new MiniCardBook(page)
    await miniBook.addBookToCart()

    await homePage.moveToCart()

    cartPage = new CartPage(page)
    await cartPage.completePayment()
  })
})
