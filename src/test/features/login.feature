import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test"


let browser: Browser;
let page: Page;
Given('User navigates to website', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://qa-practice.netlify.app/")

});

Given('User click on form menu', async function () {
    await page.locator("(//a[@class='dropdown-toggle'])[1]").click();
    //    await page.locator("//span[normalize-space(text())='Login']").click();
});

Given('User click on login menu', async function () {
    await page.locator('#login').click();
    //    await page.locator("//span[normalize-space(text())='Login']").click();
});

Given('user enter username as {string}', async function (username) {
    await page.locator('#email').fill(username);

});

Given('user enter password as {string}', async function (password) {
    await page.locator('#password').fill(password);
});

When('user clicks on submit button', async function () {
    await page.locator('#submitLoginBtn').click()
});


Then('login should be successfull', async function () {
    const currentUrl = page.url();
    expect(currentUrl).toBe('https://qa-practice.netlify.app/auth_ecommerce');
});

Then('login should be failing', async function () {
    const user = await page.locator("(//div[@id='message'])[1]").textContent();
    console.log("Logged user: " + user)
});