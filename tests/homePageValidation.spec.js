//Import @playwright/test module and its packages 'test,expect'
//The 'test' is needed in order to write the test steps and 'expect' is use for validation
const {test, expect} = require('@playwright/test');

//The test block syntax:
//'async' needs to specify with 'await' a
// await tells the test runner to wait each steps to complete 1st before proceeds to next await steps
// async set the test block/script to run test execution step by step (e.g step 1 - 2 - 3) via PROMISE
// JS promise starts the condition of awaot to run by waiting for web actions to perform 1st  (Eg: Page load, Navigation)
// if async is not inputted, them await will returns error

test('Home page', async ({page})=> {

   //Go to demoblaze.com 
   await page.goto('https://www.demoblaze.com/index.html')

   //Get page title
    const pageTitle = page.title();
   console.log('Page title is:' + pageTitle)

   //Verify page title is correct
   await expect(page).toHaveTitle('STORE')
   

   //Get page URL
   const pageURL = page.url()

   //Verify page URL is correct
   await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

   //Close page
   await page.close()

})