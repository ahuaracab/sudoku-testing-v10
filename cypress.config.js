const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '1qsjjk',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: process.env.CI ? ['cypress/e2e/all.cy.js'] : [],
  },

  component: {
    viewportHeight: 1000,
    viewportWidth: 1000,
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
})
