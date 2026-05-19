// @ts-check
import { test, expect } from '@playwright/test';

test.skip('ok', ({ page }) => {
  // fghjkjhg
})

test('test1', async ({ page }) => {
  test.setTimeout(10);
  test.step('check if 2 is eq to 3', () => {
    test.fail();
    expect(2).toBe(3); // false. -> fail
  })

  test.step('check if 2 is eq to 2', () => {
    // test.fail();
    expect(2).toBe(2);
  })

  test.step('check if 5 is eq to 5', () => {
    // test.fail();
    expect(5).toBe(5);
  })
})

test.fixme(' Filter test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  // await page.goto('https://www.amazon.com/s?k=gaming&crid=2G6R10NGAR9DY&sprefix=%2Caps%2C313&ref=nb_sb_noss');
  // await page.getByRole('button', { name: 'Submit' }).first().click();
  // await page.getByRole('link', { name: 'Apply Razer filter to narrow' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('games');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  await page.locator('.a-link-normal').first().click();

});

