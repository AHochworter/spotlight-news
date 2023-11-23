const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    REACT_APP_NEWS_API_KEY: process.env.REACT_APP_NEWS_API_KEY
  }
});
