
import fs from 'fs/promises'
import os from 'os'
import parse from '../lib/sync.js'

(async function(){
  // Prepare the dataset
  await fs.writeFile(`${os.tmpdir()}/input.csv`, [
    '\ufeff', // BOM
    'a,1\n',  // First record
    'b,2\n'  // Second record
  ].join(''), {encoding: 'utf8'})
  // Read the content
  const content = await fs.readFile(`${os.tmpdir()}/input.csv`)
  // Parse the CSV content
  const records = parse(content)
  // Print records to the console
  // records.map( record => console.log(record) )
  // Write a file with one JSON per line for each record
  const json = records.map( JSON.stringify ).join('\n')
  fs.writeFile(`${os.tmpdir()}/output.csv`, json)
})()
