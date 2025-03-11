import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;
let homePage: HomePage;

test.describe('Home Page Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await page.addLocatorHandler(
      page.getByRole("button", { name: "Dismiss" }),
      async () => {
        await page.getByRole("button", { name: "Dismiss" }).click();
        await expect(
          page.getByRole("button", { name: "Dismiss" })
        ).not.toBeVisible();
      }
    );

    await loginPage.goto();

    const username = process.env.YOUR_USERNAME ?? '';
    const password = process.env.YOUR_PASSWORD ?? '';

    if (!username || !password) {
      throw new Error('Environment variables for username or password are not set.');
    }

    await loginPage.login(username, password);
  });

  test('should display explore assets text', async ({ page }) => {
    await homePage.getExploreAssetsTextt();
  });

  test('should display create account text', async ({ page }) => {
    await homePage.getExploreCreateAccountText();
  });

  test('should display learn text', async ({ page }) => {
    await homePage.getLearnText();
  });

  test('should display latest news text', async ({ page }) => {
    await homePage.getLatestNewsText();
  });

  test('should display latest trade text', async ({ page }) => {
    await homePage.getLatestTradeText();
  });

  test('should display place first trade text', async ({ page }) => {
    await homePage.getPlaceFirstTradeText();
  });

  test('should display create account button', async ({ page }) => {
    await homePage.isCreateAccountButtonVisible();
  });

  test('should display search button', async ({ page }) => {
    await homePage.isSearchButtonVisible();
  });

  test('should check learn text with method', async ({ page }) => {
    await homePage.checkLearnTextWithMethod();
  });
});
