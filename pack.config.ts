const path = require('path')

type PackConfig = {
  entry: string
  output: {
    filename: string
    path: string
  }
}

const packConfig = {
  entry: 'src/entry.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, './dist'),
  }
}

module.exports = packConfig