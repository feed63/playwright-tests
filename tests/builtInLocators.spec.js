const {test, expect} = require('@playwright/test');

test('Built in locators', async ({page}) => {


    //1) Go to test site -> Let DOM load
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {waitUntil: 'domcontentloaded'});

    //2) Check website logo is visible -> using alt text locator for image
    const companyLogo = await page.getByAltText('company-branding');

    await expect(companyLogo).toBeVisible();

    //3) Check username & password placholder is visible

    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();

    //4) Input username and password 
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    //5) Click login button -> using getByRole locator for button

    await page.getByRole('button', {name: 'Login'}).click()

    //6) Check user's name 

    await expect(page.locator("//p[text()='User Bawdood']")).toHaveText('User Bawdood');

})
