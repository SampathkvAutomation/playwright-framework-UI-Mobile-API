import {PlaywrightTestConfig} from '@playwright/test';

const config : PlaywrightTestConfig = 
{
    use :
    {
        headless: false,
        screenshot: "on",     
        video:"on"   ,
        actionTimeout: 10000,
        trace: 'on',

  
    },
    reporter : [  ['line'],
     ['allure-playwright'] ,
      [`html`,
     { outputFolder :  'html-report',
        open : 'never'
      }]],
      projects: [
        {
          name: 'Desktop Chromium',
          use: { browserName: 'chromium',
            channel :'chrome',
            viewport: { width: 1366, height: 768 },
            headless: false
           },
        },
        // {
        //   name: 'Desktop Firefox',
        //   use: { browserName: 'firefox',
        //     viewport: { width: 1366, height: 768 },
        //     headless: false
        //    },
        // },
        // {
        //   name: 'Desktop WebKit',
        //   use: { browserName: 'webkit',
        //     viewport: { width: 1366, height: 768 },
        //     headless: false
        //    },
        // },
    ]
    ,
    fullyParallel : false,
    // workers : 3,
    retries : 0,
   
   // Output directory
    outputDir: 'test-results/',
      snapshotDir: 'test-results/snapshots/',



};
export default config;

