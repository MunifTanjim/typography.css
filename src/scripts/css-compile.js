const path = require('path')
const sass = require('node-sass')

const { writeFile } = require('./helpers')

const rootDir = path.resolve(__dirname, '../..')
const dirs = {
  input: path.resolve(rootDir, 'src/scss/_typography.scss'),
  output: path.resolve(rootDir, 'dist/css/typography.css'),
  outputMap: path.resolve(rootDir, 'dist/css/typography.css.map'),
  includes: [
    path.resolve(rootDir, 'node_modules/sass-math-pow/sass'),
    path.resolve(rootDir, 'node_modules/modularscale-sass/stylesheets')
  ]
}

console.log('Compiling SCSS...')
sass.render(
  {
    file: dirs.input,
    outFile: dirs.output,
    includePaths: dirs.includes,
    outputStyle: 'expanded',
    precision: 8,
    sourceMap: true,
    sourceMapContents: true
  },
  (error, result) => {
    if (error) console.error(error)
    else {
      writeFile(dirs.output, result.css)
      writeFile(dirs.outputMap, result.map)
    }
  }
)
