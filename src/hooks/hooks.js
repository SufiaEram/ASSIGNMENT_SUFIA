// src/hooks/hooks.js
const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

let browser;
let context;
let page;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  global.page = page; // make page available globally
});

After(async () => {
  await browser.close();
});

module.exports = { page };
