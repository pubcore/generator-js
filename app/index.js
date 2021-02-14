var Generator = require('yeoman-generator'),
  { basename, resolve } = require('path')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }
  initializing() {
    this.scope = basename(resolve(process.cwd(), '..'))
  }
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: () => `@${this.scope}/${this.appname.replace(/\s+/g, '-')}`,
      },
      {
        type: 'input',
        name: 'description',
        message: 'Package description',
      },
      {
        type: 'input',
        name: 'license',
        default: 'MIT',
        message: 'License',
      },
      {
        type: 'input',
        name: 'author',
        default: () => this.scope,
        message: 'Author',
      },
      {
        type: 'input',
        name: 'repository',
        message: 'Repository uri',
      },
    ])
  }
  writing() {
    this.fs.copy(this.templatePath('static/**'), this.destinationPath('.'), {
      globOptions: { dot: true },
    })
    //beware handling of ignore files (should be not in template/static)
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    )
    this.fs.copy(
      this.templatePath('_npmignore'),
      this.destinationPath('.npmignore')
    )
    this.fs.copyTpl(
      this.templatePath('package-json'),
      this.destinationPath('package.json'),
      { ...this.answers }
    )
  }
  install() {
    this.spawnCommandSync('npm', [
      'i',
      '-D',
      'esbuild',
      'cross-env',
      'estrella',
      'eslint',
      'mocha',
      'nyc',
      'husky',
      'prettier',
      'eslint-config-prettier',
    ])
    this.spawnCommandSync('git', ['init'])
    this.spawnCommandSync('git', ['add', '.'])
    this.spawnCommandSync('git', ['commit', '-m', 'init'])
    this.spawnCommandSync('npx', ['husky', 'install'])
  }
}
