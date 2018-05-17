const fs = require('fs')
const path = require('path')

const readFile = dir => {
  return fs.readFileSync(dir)
}

const writeFile = (dir, data) => {
  return fs.writeFileSync(dir, data)
}

module.exports = {
  readFile,
  writeFile
}
