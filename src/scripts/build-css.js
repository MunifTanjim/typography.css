const fs = require('fs')
const path = require('path')
const sass = require('node-sass')

const rootDir = path.resolve(__dirname, '../..')
const dirs = {
  input: path.resolve(rootDir, 'src/scss/typography.scss'),
  output: path.resolve(rootDir, 'dist/css/typography.css'),
  outputMap: path.resolve(rootDir, 'dist/css/typography.css.map'),
  includes: [
    path.resolve(rootDir, 'node_modules/sass-math-pow/sass'),
    path.resolve(rootDir, 'node_modules/modularscale-sass/stylesheets')
  ]
}

const writeCss = ({ css }) => {
  fs.writeFile(dirs.output, css, err => {
    if (err) console.error(err)
    else console.log('Wrote CSS')
  })
}

const writeCssMap = ({ map }) => {
  fs.writeFile(dirs.outputMap, map, err => {
    if (err) console.error(err)
    else console.log('Wrote CSS Map')
  })
}

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
      writeCss(result)
      writeCssMap(result)
    }
  }
)
