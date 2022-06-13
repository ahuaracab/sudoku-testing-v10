const { defineConfig } = require('cypress')

// cypress run
// isInteractive: true,
// isTextTerminal: true,
// cypress open
// isInteractive: true,
// isTextTerminal: false,

module.exports = defineConfig({
  projectId: '1qsjjk',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      require('@bahmutov/cypress-code-coverage/plugin')(on, config)

      if (config.isTextTerminal) {
        return {
          excludeSpecPattern: ['cypress/e2e/all.cy.js'],
        }
      }

      return config
    },
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
