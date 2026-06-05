import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../hooks/hooks';
import { expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import locators from '../locators/locators.json';
import { URLS } from '../config/env';


        let base:BasePage; //declare a variable of type BasePage

         When(': user clicks on the Admin module', async function () {

             base=new BasePage(page); //create an object of the BasePage class and pass the page variable from hooks.ts to the constructor
            await base.click(locators.admin.adminmodule); //call the click method from the BasePage class to click on
           
         });
       
         
         When(': user enters system username as {string}',{timeout: 50000}, async function (systemusername:string) {
            await base.enterText(locators.admin.systemusername, systemusername);  //call the enterText method from the BasePage class to fill the system username field with the provided username
          
         });
       
          
         When(': user clicks on the search button',{timeout: 50000}, async function () {
            await base.click(locators.admin.searchBtn)
            ; //call the click method from the BasePage class to click on
           
         });
       
         
         Then(': application shows as a one result found', async function () {

            await base.verify(locators.admin.result); //call the verify method from the BasePage class      
         });
       