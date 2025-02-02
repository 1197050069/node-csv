
import transform from '../lib/index.js'
import assert from assert

const output = []
transform([
  ['1','2','3','4'],
  ['a','b','c','d']
], function(data){
  data.push(data.shift())
  return data
})
.on('readable', function(){
  while(row = this.read()){
    output.push(row)
  }
})
.on('error', function(err){
  console.error(err.message)
})
.on('finish', function(){
  assert.deepEqual(output, [
    [ '2', '3', '4', '1' ],
    [ 'b', 'c', 'd', 'a' ]
  ])
})
