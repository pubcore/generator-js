'use strict'
var { version } = require('./package.json'),
  { NODE_ENV } = process.env

require('estrella')
  .build({
    entryPoints: ['src/app.mjs'],
    target: ['chrome75', 'firefox68', 'safari12'],
    minify: NODE_ENV === 'production',
    sourcemap: true,
    bundle: true,
    outfile: `public/app-${version}.js`,
    inject: ['build-inject.js'],
    loader: { '.js': 'jsx' },
  })
  .catch(() => process.exit(1))
