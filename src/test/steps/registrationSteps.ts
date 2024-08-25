import { Given, setDefaultTimeout } from "@cucumber/cucumber";
import { LandingPage } from "../pages/LandingPage";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(150000);
let landingPage = new LandingPage(pageFixture.page);


Given('The user lands at the webpage.', async function () {
    await landingPage.visitWebPage();
});