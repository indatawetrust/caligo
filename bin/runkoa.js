#!/usr/bin/env node

var argv = process.argv
argv.shift()

var exec = require('child_process').exec;

if (! argv[1]){
  argv[1] = 'bin/www'
  console.log('default entry is bin/www')
}

exec('node -v', function(error, stdout, stderr) {
  var entry = require('path').resolve(process.cwd(),  argv[1])

  require('..')(entry, is_cli=true)
});
