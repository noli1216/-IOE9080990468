const { defineConfig } = require("cypress");
// npx cypress run --record --key f486190d-5468-4229-82d8-2d6f11781ae4
module.exports = defineConfig({
  // projectId: "h75uqx",
  projectId: "p1xbuh",
  reporter: "cypress-mochawesome-reporter",
  retries: 2,
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      // implement node event listeners here
      baseUrl: "https://opensource-demo.orangehrmlive.com";
    },
  },
});
