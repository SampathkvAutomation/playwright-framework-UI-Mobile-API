//https://www.editpad.org/
import {test , expect} from '@playwright/test';

test('test editpad @editpad', async({page}) =>{

    await page.goto("https://www.editpad.org/");
    await page.waitForLoadState("networkidle");

    const texttopastLine1  = "Hello everyone. My is Sampath."
    const texttopasteline2 = "I am here for Interview for Automation Qa.";

    await page.locator("//img[@alt='Close Icon']").first().click();
    await page.locator('//textarea[@id="textarea__editor"]').fill(texttopastLine1 +"\n"+ texttopasteline2);
    await page.locator('//span[@class="slider round"]').click();


    // await page.evaluate(() => {
    //     const textarea = document.getElementById("textarea__editor") as HTMLTextAreaElement;
    //     textarea.setSelectionRange(0, 28); // Select "Hello everyone. My name is Sampath."
    // });

    const textarea = page.locator('//textarea[@id="textarea__editor"]');
await textarea.click();

// Move cursor to the start
await page.keyboard.press("Control+End"); // Move to the end
await page.keyboard.press("ArrowLeft"); // Move cursor before the last character

// Select "Automation Qa" using Shift + ArrowLeft
for (let i = 0; i < "Automation Qa".length; i++) {
    await page.keyboard.press("Shift+ArrowLeft");
}
    // await page.locator('//p[text()="Hello everyone. My is Sampath."]').dblclick({timeout:5000});
    // await page.locator('//p[contains(text(),"texttopastLine1")]').click();
    // await page.locator('//p[contains(text(),"texttopastLine1")]').click();
    // await page.locator('//span[@class="heading__face"]').click();
    await page.locator('//span[text()="H3"]').click();
})
