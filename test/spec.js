const helpers = require('yeoman-test'),
  path = require('path'),
  fs = require('fs'),
  {ok} = require('assert').strict

describe('generator for ECMAScript package stub', () => {
  it('creates base files', () =>
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        name:'my-project',
        description:'a test project'
      }).then(dir => {
        ok(fs.existsSync(`${dir}`))
        ok(fs.existsSync(`${dir}/package.json`))
        ok(fs.existsSync(`${dir}/.npmignore`))
        ok(fs.existsSync(`${dir}/.gitignore`))
        ok(fs.existsSync(`${dir}/.eslintignore`))
        ok(fs.existsSync(`${dir}/.eslintrc.js`))
      })
  )
})
