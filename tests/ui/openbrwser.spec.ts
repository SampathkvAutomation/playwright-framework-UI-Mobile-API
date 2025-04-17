import { expect , test } from "@playwright/test";

test('@Exampletest1 open browser', async({page}) => {

    await page.goto("https://www.google.com/");
    await page.waitForLoadState("networkidle");
    await page.locator("//textarea[@id='APjFqb']").fill("Hello");
    const  options = await page.locator("//ul[@class='G43f7e']/li/div");

    let count =await  options.count();
    for(let i=0;i < count;i++)
    {
        options.hover();
        await page.waitForTimeout(6000); 
    }
});