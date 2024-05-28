// tests/google-search.spec.js
import { test, expect } from '@playwright/test';
const BasePage = require('../pages/page-objects'); //use this page for your page object model 😉

test('perform a Google search', async ({ page }) => {
  // Navigate to Google -> or where ever you need to go. 🌐
  await page.goto('https://www.google.com');

  // Use this to do the click by click process. 🚀
  await page.pause(); 

});

