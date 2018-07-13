const path = require('path')
const CleanCSS = require('clean-css')

const { readFile, writeFile } = require('./helpers')

const rootDir = path.resolve(__dirname, '..')
const dirs = {
  input: path.resolve(rootDir, 'dist/css/typography.css'),
  output: path.resolve(rootDir, 'dist/css/typography.min.css')
}

const cleancss = new CleanCSS({
  level: {
    1: {},
    2: { overrideProperties: false }
  },
  returnPromise: true
})

const input = readFile(dirs.input)

console.log('Minifying CSS...')
cleancss
  .minify(input)
  .then(output => {
    writeFile(dirs.output, output.styles)
  })
  .catch(err => console.error(err))
