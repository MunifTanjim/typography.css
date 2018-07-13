const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const readFile = dir => {
  return fs.readFileSync(dir)
}

const writeFile = (dir, data) => {
  mkdirp.sync(path.dirname(dir))

  return fs.writeFileSync(dir, data)
}

module.exports = {
  readFile,
  writeFile
}
