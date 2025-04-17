// import { test, expect } from '@playwright/test';

// test('Login to page', async ({ page }) => {
//   await page.goto('https://practicetestautomation.com/practice-test-login/');
//   await page.locator('#username').fill("student");
//   await page.locator('#password').fill("Password123");
//   await page.locator('#submit').click();

//      expect(page.url()).toContain('practicetestautomation.com/logged-in-successfully/');

//      expect(page.locator('//strong')).toHaveText('Congratulations student. You successfully logged in!');
//   await page.locator('.wp-block-button aligncenter is-style-fill').click();
// });

// test('negative', async ({ page }) => {
  
//   await page.goto('https://practicetestautomation.com/practice-test-login/');
//   await page.locator('#username').fill("invalid");
//   await page.locator('#password').fill("Password123");
//   expect(page.locator('#error')).toHaveText('Congratulations student. You successfully logged in!');
// });

// test('negative 1', async ({ page }) => {
  
//   await page.goto('https://practicetestautomation.com/practice-test-login/');
//   await page.locator('#username').fill("student ");
//   await page.locator('#password').fill("invalid");
//   expect(page.locator('#error')).toHaveText('Congratulations student. You successfully logged in!');
// });