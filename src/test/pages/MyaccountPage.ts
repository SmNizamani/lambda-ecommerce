import { expect, Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class MyAccount {


    constructor(public page: Page) {
        pageFixture.page = page;
    };

    myaccLocators = {
        accountBtn: () => pageFixture.page.locator("//a[@role='button']//span[@class='title'][normalize-space()='My account']"),
        usernameField: () => pageFixture.page.locator("#input-email"),
        passwordField: () => pageFixture.page.locator("#input-password"),
        subtmitBtn: () => pageFixture.page.locator('input[value="Login"]'),
        editAccBtn: () => pageFixture.page.locator("//div[@id='content']//div[1]//div[1]//div[1]//div[1]"),
        firstName: () => pageFixture.page.locator("#input-firstname"),
        lastName: () => pageFixture.page.locator("#input-lastname"),
        email: () => pageFixture.page.locator('#input-email'),
        telephone: () => pageFixture.page.locator("#input-telephone"),
        continueBtn: () => pageFixture.page.locator("input[value='Continue']")
    };

    public async userLogin(): Promise<void> {
        await pageFixture.page.goto('https://ecommerce-playground.lambdatest.io/');
        await this.myaccLocators.accountBtn().click();
        await this.myaccLocators.usernameField().fill("smnizamani@gmail.com");
        await this.myaccLocators.passwordField().fill("123456");
        await this.myaccLocators.subtmitBtn().click();
    }

    public async goToEditAccount(): Promise<void> {
        await this.myaccLocators.editAccBtn().click();
    };

    public async enterNewName(name: string): Promise<void> {
 
    };

    public async clickOnSubmitBtn(): Promise<void> {

    };

    

    public async loginSuccessCase(errorMessage: string): Promise<void> {


    };

    public async loginFailsCase(uname: string, pword: string): Promise<void> {

    };

};