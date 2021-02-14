import { ok } from 'assert'
import main from '../src/app.mjs'

describe('my module', () => {
  it('exports an object', () => {
    ok(typeof main === 'object')
  })
})
