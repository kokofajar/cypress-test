const { defineConfig}  = require('cypress')

module.exports = defineConfig({
    e2e:{
        baseUrl : 'https://reqres.in/',
        specPattern : "cypress/support/e2e",
        supportFile : false,
    }
})