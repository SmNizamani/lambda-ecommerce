import { Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class LandingPage {

    constructor (public page: Page){
        pageFixture.page = page;
    };

    public async visitWebPage():Promise<void> {
        await pageFixture.page.goto('https://ecommerce-playground.lambdatest.io/');
    };

};