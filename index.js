var registry = require('package-stream')({
  db: 'https://replicate.npmjs.com'
})
var names = []

registry
  .on('package', function (pkg) {
    process.stdout.write('.')
    names.push(pkg.name)
  })
  .on('up-to-date', function (pkg) {
    console.log('count', names.length)
    console.log('scoped?', names.some(name => name.match(/^@/)))
    process.exit()
  })
