const helpers = require('yeoman-test'),
  { join } = require('path'),
  { file } = require('yeoman-assert')

before(() => helpers.setUpTestDirectory(join(__dirname, 'generator-test')))

describe('generator for ECMAScript package stub', () => {
  it('creates base files', () =>
    helpers
      .run(join(__dirname, '../app'))
      .withPrompts({
        name: 'my-project',
        description: 'a test project',
        repository: 'test',
      })
      .then(() => {
        file([
          'package.json',
          '.npmignore',
          '.gitignore',
          '.eslintignore',
          '.eslintrc.js',
        ])
      })).timeout(60000)
})
