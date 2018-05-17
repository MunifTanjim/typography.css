const path = require('path')
const CleanCSS = require('clean-css')

const { readFile, writeFile } = require('./helpers')

const rootDir = path.resolve(__dirname, '../..')
const dirs = {
  input: path.resolve(rootDir, 'dist/css/typography.css'),
  inputMap: path.resolve(rootDir, 'dist/css/typography.css.map'),
  output: path.resolve(rootDir, 'dist/css/typography.min.css'),
  outputMap: path.resolve(rootDir, 'dist/css/typography.min.css.map')
}

const cleancss = new CleanCSS({
  level: {
    1: {},
    2: { overrideProperties: false }
  },
  returnPromise: true,
  sourceMap: true,
  sourceMapInlineSources: true
})

const input = readFile(dirs.input)
const inputMap = readFile(dirs.inputMap)

console.log('Minifying CSS...')
cleancss
  .minify(input)
  .then(output => {
    writeFile(dirs.output, output.styles)
    writeFile(dirs.outputMap, output.sourceMap)
  })
  .catch(err => console.error(err))
