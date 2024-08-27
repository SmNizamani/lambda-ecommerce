import { expect, Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class MyAccount {


    constructor(public page: Page) {
        pageFixture.page = page;
    };

    myaccLocators = {
        editAccBtn: () => pageFixture.page.locator("//div[@id='content']//div[1]//div[1]//div[1]//div[1]"),
        firstName: () => pageFixture.page.locator("#input-firstname"),
        lastName: () => pageFixture.page.locator("#input-lastname"),
        email: () => pageFixture.page.locator('#input-email'),
        telephone: () => pageFixture.page.locator("#input-telephone"),
        continueBtn: () => pageFixture.page.locator("input[value='Continue']")
    };

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