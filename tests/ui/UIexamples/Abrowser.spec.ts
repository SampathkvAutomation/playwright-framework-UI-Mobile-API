import {test,expect} from '@playwright/test';



test('open Amazon @amazontest', async({page}) =>
{

    await page.goto("https://www.amazon.in/");
    await page.waitForLoadState("networkidle");
    await page.locator("//input[@id='twotabsearchtextbox']").fill("MSI-Windows-GeForce-RTX4050-B8VE-884IN");
    await page.locator('#nav-search-submit-button').click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Sponsored Ad - MSI Vector 16' }).first().click();
    const page1 = await page1Promise;
    let price = await page1.locator("//span[contains(text(),'Without Exchange')]/following::span[2]/parent::span").innerText();
expect(price).toBe("99,990.00");


}
)