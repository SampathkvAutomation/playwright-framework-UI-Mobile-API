import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('textbox', { name: 'Type characters' }).click();
  await page.getByRole('textbox', { name: 'Type characters' }).fill('EJJTFT');
  await page.getByRole('button', { name: 'Continue shopping' }).click();
});