import { expect, Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class LoginPage {


    constructor(public page: Page) {
        pageFixture.page = page;
    };

    LoginPageLocators = {
        accountBtn: () => pageFixture.page.locator("//a[@role='button']//span[@class='title'][normalize-space()='My account']"),
        usernameField: () => pageFixture.page.locator("#input-email"),
        passwordField: () => pageFixture.page.locator("#input-password"),
        subtmitBtn: () => pageFixture.page.locator('input[value="Login"]'),
        errorMessage: () => pageFixture.page.locator(".alert.alert-danger.alert-dismissible")
    };

    public async goToWebpage(): Promise<void> {
        await pageFixture.page.goto('https://ecommerce-playground.lambdatest.io/');
    };

    public async clickOnLoginBtn(): Promise<void> {
        await this.LoginPageLocators.accountBtn().click();
    };

    public async fillLoginInfo(uname: string, pword: string): Promise<void> {
        await this.LoginPageLocators.usernameField().fill(uname);
        await this.LoginPageLocators.passwordField().fill(pword);
        await this.LoginPageLocators.subtmitBtn().click();
    };

    public async loginSuccessCase(errorMessage: string): Promise<void> {


    };

    public async loginFailsCase(uname: string, pword: string): Promise<void> {
        await expect(this.LoginPageLocators.errorMessage)
        await this.LoginPageLocators.errorMessage().textContent
    };

};