const path = require('path')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')

const { readFile, writeFile } = require('./helpers')

const rootDir = path.resolve(__dirname, '../..')
const dirs = {
  input: path.resolve(rootDir, 'dist/css/typography.css'),
  output: path.resolve(rootDir, 'dist/css/typography.css'),
  outputMap: path.resolve(rootDir, 'dist/css/typography.css.map')
}

const input = readFile(dirs.input)

const plugins = [
  autoprefixer({
    cascade: false
  })
]

console.log('PostCSS Processing...')
postcss(plugins)
  .process(input, { from: dirs.input, to: dirs.output })
  .then(result => {
    writeFile(dirs.output, result.css)
    writeFile(dirs.outputMap, result.map)
  })
