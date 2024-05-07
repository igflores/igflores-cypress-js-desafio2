const { defineConfig } = require("cypress");  //ES MODULE

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  retries: process.env.CI ? 2 : 0,
  video:false,
  
  e2e: {
    specPattern: 'cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://pushing-it.vercel.app/',
    watchForFileChanges: false,
    defaultCommandTimeout: 4000,
  },

  env: {
    username: 'pushingit',
    password: '123456!',
  }
  
});
