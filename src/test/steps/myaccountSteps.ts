import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { pageFixture } from "../hooks/pageFixture";
import { MyAccount } from "../pages/MyaccountPage";


let loginPage = new LoginPage(pageFixture.page)
let myAcc = new MyAccount(pageFixture.page)

// NAME CHANGE SCENARIO

         Given('User navigates to website.', async function () {
           await myAcc.userLogin();
           await myAcc.userLogin();
         });

