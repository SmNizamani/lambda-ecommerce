import { Given, Then, When } from "@cucumber/cucumber";

Given('The user lands at the webpage.', async function(){
    console.log("Hello world");
});


When('The user clicks on the Sign In button on the header.', async function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

When('The user enters {string} and {string}.', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Then('The user is logged in.', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });