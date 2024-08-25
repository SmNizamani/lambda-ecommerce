import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { LandingPage } from "../pages/LandingPage";
import { pageFixture } from "../hooks/pageFixture";
import { RegisterPage } from "../pages/RegisterPage";

setDefaultTimeout(150000);
let landingPage = new LandingPage(pageFixture.page);
let registerPage = new RegisterPage(pageFixture.page)


Given('The user lands at the webpage.', async function () {
    await landingPage.visitWebPage();
});

When('The user clicks on register account.', async function () {
    await registerPage.goToRegisterAccount();
});

When('The user enters {string}, {string}, {string}, {string}, {string}, {string}.', async function (firstName: string, lastName: string, email: string, phone: string, password: string, confirmPassword: string) {
    await registerPage.fillRegisterForm(firstName, lastName, email, phone, password, confirmPassword);
});

When('The user agrees to privacy policy.', async function () {

});

Then('User clicks the continue button.', async function () {

});