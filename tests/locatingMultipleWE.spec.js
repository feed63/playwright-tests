const {test, expect} = require('@playwright/test');

test('Locate multiple elements', async ({page})=> {

    //Navigate to test web
    await page.goto('https://www.demoblaze.com')

    //create variable to save multiple links
    //const links = await page.$$('a');

    /*for(const link of links) {

        const linkText = await link.textContent();
        console.log(linkText);
    }*/


     await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const product of  products) {

        const productName = await product.textContent();
        console.log(productName);
    }


})