
import assert from 'assert'
import parse from '../lib/index.js'

parse(`
"key_1","key_2"
"value 1","value 2"
`.trim(), {
  columns: true
}, function(err, records){
  assert.deepStrictEqual(
    records, [{
      key_1: 'value 1',
      key_2: 'value 2'
    }]
  )
})
