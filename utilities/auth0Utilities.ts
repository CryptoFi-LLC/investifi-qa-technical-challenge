import { Page } from '@playwright/test';

// Function to navigate to the login page
export async function gotoLoginPage(page: Page) {
  await page.goto('https://dbp-frontend-v2.vercel.app/');
}

// Function to perform login action
export async function login(page: Page, username: string, password: string) {
      await page.fill('#username', username);
      await page.fill('#password', password);
      await page.getByText('Continue', { exact: true }).click();
}

// Function to perform sign up action
export async function signUp(page: Page, username: string, password: string) {
  await page.getByText('Sign up', { exact: true }).click();
  await page.fill('#email', username);
  await page.fill('#password', password);
  await page.getByText('Continue', { exact: true }).click();
}

// Function to check if login error is visible
export async function isLoginErrorVisible(page: Page): Promise<boolean> {
  return await page.isVisible('.login-error');
}

// Deliberate Errors Introduced

export async function logout(page: Page) {
  await page.click('#logout'); // Error: Incorrect selector, assuming the correct one is different
}

export async function resetPassword(page: Page, email: string) {
  await page.goto('https://dbp-frontend-v2.vercel.app/reset'); // Error: Incorrect URL path
  await page.fill('#email', email);
  await page.getByText('Reset Password', { exact: true }).click();
} 