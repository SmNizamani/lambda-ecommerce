import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { pageFixture } from "../hooks/pageFixture";


let loginPage = new LoginPage(pageFixture.page)
Given('User navigates to website', async function () {
    await loginPage.goToWebpage();
});

Given('The user clicks on login account.', async function () {
    await loginPage.clickOnLoginBtn();
});

When('user enter username as {string} and password as {string}', async function (username: string, password: string) {
    await loginPage.fillLoginInfo(username, password);

});

Then('{string} section should be displayed - SUCCESS', async function (featureSectionName: string) {
    await expect(pageFixture.page.locator("div[id='content'] div:nth-child(1) h2:nth-child(1)")).toHaveText(featureSectionName)
});

Then('Error message should be visible - FAILURE', async function () {
    await expect(pageFixture.page.locator('.alert.alert-danger.alert-dismissible')).toBeVisible();
});