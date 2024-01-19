const { defineConfig } = require('cypress')

// cypress run
// isInteractive: true,
// isTextTerminal: true,
// cypress open
// isInteractive: true,
// isTextTerminal: false,

module.exports = defineConfig({
  //projectId: '1qsjjk',
  e2e: {
    //experimentalRunAllSpecs: true,
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      //require('@bahmutov/cypress-code-coverage/plugin')(on, config)
      //return config
    },
    // control the code coverage plugin via env variables
    env: {
      coverage: false,
      specCovers: true,
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
