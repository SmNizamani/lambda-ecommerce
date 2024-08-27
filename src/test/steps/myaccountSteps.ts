import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { pageFixture } from "../hooks/pageFixture";
import { MyAccount } from "../pages/MyaccountPage";


let loginPage = new LoginPage(pageFixture.page)
let myAcc = new MyAccount(pageFixture.page)

// NAME CHANGE SCENARIO

         Given('User navigates to website.', async function () {
           loginPage.goToWebpage();
         });


         Given('User has signed into the web application.', async function () {
           // Write code here that turns the phrase above into concrete actions
           //return 'pending';
         });

         Given('User clicks on Edit Account Information.', async function () {
           // Write code here that turns the phrase above into concrete actions
           //return 'pending';
         });


         When('User edit name field with {string}.', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           //return 'pending';
         });


         When('User clicks on submit button.', async function () {
           // Write code here that turns the phrase above into concrete actions
           //return 'pending';
         });


         Then('Success Message should be displayed.', async function () {
           // Write code here that turns the phrase above into concrete actions
           //return 'pending';
         });



         
         //Empty Name Field Scenario


           Given('User navigates to website.', async function () {
             // Write code here that turns the phrase above into concrete actions
             //return 'pending';
           });
  
           Given('User has signed into the web application.', async function () {
             // Write code here that turns the phrase above into concrete actions
             ////return 'pending';
           });

           Given('User clicks on Edit Account Information.', async function () {
             // Write code here that turns the phrase above into concrete actions
             ////return 'pending';
           });
  
         When('User edit name field with {string}.', async function (string) {
             // Write code here that turns the phrase above into concrete actions
             ////return 'pending';
           });

           When('User clicks on submit button.', async function () {
             // Write code here that turns the phrase above into concrete actions
             ////return 'pending';
           });
  
           Then('Error Message should be displayed.', async function () {
             // Write code here that turns the phrase above into concrete actions
             ////return 'pending';
           });

