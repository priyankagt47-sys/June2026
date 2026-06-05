

import {Page, expect} from "playwright/test";



export class BasePage {
     
    page:Page; //declare a variable of type Page and assign it to the page variable from hooks.ts

    constructor(page:Page) //constructor to initialize the page variable
    {
        this.page=page; //assign the page variable from hooks.ts to the page variable in this class
    }
  
    //common methods for all pages can be defined here
    
    async navigate(url:string) //method to navigate to a URL
    {
        await this.page.goto(url); //navigate to the specified URL
    }
    
    async enterText(locator:string, text:string) //method to input text in a field username and password   
    {
        await this.page.locator(locator).fill(text); //fill the field with the provided text
    }

    async click(locator:string)//method to click on an element

    {
        await this.page.locator(locator).click(); //click on the specified element
    }

    async verify(locator:string)//method to verify that an element is visible on the page
    {
        await expect(this.page.locator(locator)).toBeVisible(); //verify that the specified element is visible on the page
    }

    async selectFromAutoSuggest(inputLocator:string, suggestionPattern:string, value:string)
    {
        const input = this.page.locator(inputLocator);
        await input.fill(value);
        // try to trigger suggestions
        await input.press('ArrowDown');
        await this.page.waitForTimeout(500);
        const exactLocator = suggestionPattern.replace('{value}', value);
        const containerLocator = "//div[contains(@class,'oxd-autocomplete-dropdown')]";
        // wait for suggestion container to appear
        await this.page.locator(containerLocator).waitFor({ state: 'visible', timeout: 8000 });
        try {
            await this.page.locator(exactLocator).first().waitFor({ state: 'visible', timeout: 2000 });
            await this.page.locator(exactLocator).first().click();
            return;
        } catch (e) {
            // try contains(text(), value)
            const containsLocator = exactLocator.replace("text()=\'" + value + "\'", "contains(text(), '" + value + "')");
            if (await this.page.locator(containsLocator).first().count() > 0) {
                await this.page.locator(containsLocator).first().click();
                return;
            }
            // fallback: click first suggestion available
            const firstSuggestion = this.page.locator(containerLocator + "//span").first();
            await firstSuggestion.click();
        }
    }

    async selectDropdownByText(dropdownLocator:string, optionPattern:string, value:string)
    {
        await this.page.locator(dropdownLocator).click();
        const optionLocator = optionPattern.replace('{value}', value);
        await this.page.locator(optionLocator).click();
    }









}