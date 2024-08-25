import { Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class RegisterPage {


    constructor (public page: Page){
        pageFixture.page = page;
    };

    registerPageLocators = {
        firstName:() => pageFixture.page.locator("//input[contains(@name, 'firstname')]"),
        lastName:() => pageFixture.page.locator("//input[contains(@name, 'lastname')]"),
        email:() => pageFixture.page.locator("//input[contains(@name, 'email')]"),
        phone:() => pageFixture.page.locator("//input[contains(@name, 'telephone')]"),
        password:() => pageFixture.page.locator("//input[contains(@name, 'password')]"),
        confirmPass:() => pageFixture.page.locator("//input[contains(@name, 'confirm')]"),
        privacyPolicyBtn:() => pageFixture.page.locator("//div[contains(@class,'custom-control custom-checkbox custom-control-inline')]"),
        continueBtn:() => pageFixture.page.locator("//input[contains(@type,'submit')]")
    };

    public async fillRegisterForm(firstName: string, lastName: string, email: string, phone: string, password: string, confirmPassword: string):Promise<void>{
        await this.registerPageLocators.firstName().fill(firstName);
        await this.registerPageLocators.lastName().fill(lastName);
        await this.registerPageLocators.email().fill(email);
        await this.registerPageLocators.phone().fill(phone);
        await this.registerPageLocators.password().fill(password);
        await this.registerPageLocators.confirmPass().fill(confirmPassword);
        await this.registerPageLocators.privacyPolicyBtn().click();
        await this.registerPageLocators.continueBtn().click();
    };
};