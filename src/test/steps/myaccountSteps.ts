import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { pageFixture } from "../hooks/pageFixture";
import { MyAccount } from "../pages/MyaccountPage";


let loginPage = new LoginPage(pageFixture.page)
let myAcc = new MyAccount(pageFixture.page)
Given('User navigates to website.', async function () {
    await loginPage.goToWebpage();
});

Given('User has signed into the web application.', async function () {
    //assert url - acc page.
});

Given('User clicks on Edit Account Information.', async function () {
    await myAcc.goToEditAccount();
});

When('User edit name field with {string}', async function (newName: string) {
    await myAcc.enterNewName(newName);

});

When('User clicks on submit button.', async function () {
    await myAcc.clickOnSubmitBtn();
});
// Remove below function.
When('User clicks on submit button.', async function (featureSectionName: string) {
    await expect(pageFixture.page.locator("div[id='content'] div:nth-child(1) h2:nth-child(1)")).toHaveText(featureSectionName)
});

Then('Success Message should be displayed.', async function () {
    await expect(pageFixture.page.locator('.alert.alert-danger.alert-dismissible')).toBeVisible();
});

Then('Error Message should be displayed.', async function () {
    await expect(pageFixture.page.locator('.alert.alert-danger.alert-dismissible')).toBeVisible();
});



