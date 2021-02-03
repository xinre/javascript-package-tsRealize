const fs = require('fs')
const path = require('path')
const babelParser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const {
  transformFromAst
} = require('@babel/core')

const config = require('./minipack.config')

const entry = config.entry

const output = config.output