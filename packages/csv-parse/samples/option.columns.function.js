
import assert from 'assert'
import parse from '../lib/index.js'

parse(`
"key_1","key_2"
"value 1","value 2"
`.trim(), {
  columns: header =>
    header.map( column => column.toUpperCase() )
}, function(err, records){
  assert.deepStrictEqual(
    records, [{
      KEY_1: 'value 1',
      KEY_2: 'value 2'
    }]
  )
})
