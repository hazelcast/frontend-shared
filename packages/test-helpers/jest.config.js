const configBase = require('../../jest.config.base')

module.exports = {
  ...configBase,
  transformIgnorePatterns: [],
  collectCoverage: false,
}
