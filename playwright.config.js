// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  headless: false, 
  workers: 5, // This is to have multiple workers. 
  testDir: './tests', // Do not touch!
  timeout: 30000,
  expect: {
    timeout: 5000,
  },

  
  fullyParallel: true,

  // This is for your HTML reporter
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],
  use: {
    headless: false, // Run tests in headed mode
    trace: 'on-first-retry', 
    trace: 'on-first-retry',
    screenshot: 'always', // This adds the screenshots
    video: 'always', // This adds the video recording
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
