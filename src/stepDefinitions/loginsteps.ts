import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../hooks/hooks';
import { expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import locators from '../locators/locators.json';
import { URLS } from '../config/env';


        let base:BasePage; //declare a variable of type BasePage

         Given('user navigates to url',{timeout: 30000},async function () {
           
            base=new BasePage(page); //create an object of the BasePage class and pass the page variable from hooks.ts to the constructor
           
            await base.navigate(URLS.url); //call the navigate method from the BasePage class to navigate to the specified URL

            //await page.goto(URLS.url); //navigate to the specified URL
           
        });
       
          
         When('user enters username {string}',{timeout: 30000}, async function (username:string) {
           
            await base.enterText(locators.login.username, username);  //call the enterText method from the BasePage class to fill the username field with the provided username
           
           // await page.locator("//*[@placeholder='Username']").fill(username); //fill the username field with the provided username 
           
        });
       

       
         When('user enters password {string}',{timeout: 30000}, async function (password:string) {
            
            await base.enterText(locators.login.password, password);  //call the enterText method from the BasePage class to fill the password field with the provided password
            
            //await base.enterText(locators.login.password, password);  //call the enterText method from the BasePage class to fill the password field with the provided password
           
         });
       
         
         When('user clicks on the login button',{timeout: 30000}, async function () {
            
            await base.click(locators.login.loginBtn); //call the click method from the BasePage class to click on
            
            //await page.locator("//*[text()=' Login ']").click(); //click on the login button
           
         });
       
         
         Then('user should see the dashboard page', {timeout: 30000}, async function () {
          
           await base.verify(locators.login.dashboard); //call the verify method from the BasePage class to verify that the dashboard page is displayed
          
          //  await expect(page.locator("(//*[text()='Dashboard'])[2]")).toBeVisible(); //assertion to verify that the dashboard page is displayed
           
         });

         
        // Then('user should see the error message as Invalid credentials', {timeout: 30000}, async function () {
          // await expect(page.locator("//*[text()='Invalid credentials']")).toBeVisible(); //assertion to verify that the error message Invalid credentials is displayed
         //});

         //command to run only smoke tests is npx cucumber-js --tags @Smoke
         //command to run only regression tests is npx cucumber-js --tags @Regression
         //command to run both smoke and regression tests is npx cucumber-js --tags @Smoke or @Regression
         //command to run tests that are tagged with both smoke and regression is npx cucumber-js --tags @Smoke and @Regression
         //command to run all tests except smoke tests is npx cucumber-js --tags @Smoke and not @Regression
         //command to run all tests except regression tests is npx cucumber-js --tags @Regression and not @Smoke