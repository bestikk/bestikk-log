export default [
  {
    input: 'src/main.js',
    output: {
      file: 'index.cjs',
      format: 'cjs',
      exports: 'named'
    },
    external: [ 'colors/safe' ]
  },
  {
    input: 'src/main.js',
    output: {
      file: 'index.esm.js',
      format: 'es'
    },
    external: [ 'colors/safe' ]
  }
]
