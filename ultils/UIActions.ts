import {Page} from '@playwright/test';
import { attachment} from 'allure-js-commons';

export  class UIActions {



async takeScreenShotAndAttachToreport(page : Page , Screenshotpath : string)
{
   
   const screenshot= await page.screenshot({path :Screenshotpath+'.png' });
  attachment(Screenshotpath,screenshot, 'image/png');
}



async clickLocator(page : Page, elem : any)
{
    await page.click(elem, {timeout :1000});
    await page.on('dialog',dialog=> {

         dialog.accept();
        // dialog. 

    } );
}

}

