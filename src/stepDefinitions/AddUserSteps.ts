import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../hooks/hooks';
import { BasePage } from '../pages/BasePage';
import locators from '../locators/locators.json';

let base: BasePage;

When('user clicks on Admin module', { timeout: 50000 }, async function () {
  base = new BasePage(page);
  await base.click(locators.admin.adminmodule);
});

When('user clicks on Add button', { timeout: 50000 }, async function () {
  await base.click(locators.admin.addBtn);
});

When('user selects user role {string}', { timeout: 50000 }, async function (role: string) {
  await base.selectDropdownByText(locators.admin.userRoleDropdown, locators.admin.userRoleOption, role);
});

When('user enters employee name {string}', { timeout: 50000 }, async function (employeeName: string) {
  await base.selectFromAutoSuggest(locators.admin.employeeName, locators.admin.employeeSuggestion, employeeName);
});

When('user enters add username {string}', { timeout: 50000 }, async function (username: string) {
  await base.enterText(locators.admin.addUsername, username);
});

When('user selects status {string}', { timeout: 50000 }, async function (status: string) {
  await base.selectDropdownByText(locators.admin.statusDropdown, locators.admin.statusOption, status);
});

When('user enters password {string} and confirm password {string}', { timeout: 50000 }, async function (password: string, confirmPassword: string) {
  await base.enterText(locators.admin.password, password);
  await base.enterText(locators.admin.confirmPassword, confirmPassword);
});

When('user clicks on Save button', { timeout: 50000 }, async function () {
  await base.click(locators.admin.saveBtn);
});

Then('user should see success message', { timeout: 50000 }, async function () {
  await base.verify(locators.admin.successToast);
});
