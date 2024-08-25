import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test"


let browser: Browser;
let page: Page;
Given('User navigates to website', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/")

});

Given('User click on account button', async function () {
    await page.locator("//a[@role='button']//span[@class='title'][normalize-space()='My account']").click();
    //    await page.locator("//span[normalize-space(text())='Login']").click();
});


Given('user enter username as {string}', async function (username) {
    await page.locator('#input-email').fill(username);

});

Given('user enter password as {string}', async function (password) {
    await page.locator('#input-password').fill(password);
});

When('user clicks on submit button', async function () {
    await page.locator('input[value="Login"]').click()
});

Then('login should be successfull', async function () {
    const currentUrl = page.url();
    expect(currentUrl).toBe('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
});

Then('login should be failing', async function () {
    const errorMessage = await page.locator('.alert.alert-danger.alert-dismissible').textContent();
    expect(errorMessage).toContain('Warning: No match for E-Mail Address and/or Password.');
});