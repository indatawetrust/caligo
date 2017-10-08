#!/usr/bin/env node

const copydir = require('copy-dir');
const path = require('path');
const runner = require('./runner.js');
const ora = require('ora');
const { exec } = require('child_process');

require('yargs')
  .command('init', 'create project', (yargs) => {
    yargs.option('dir', {
      describe: 'project directory',
      default: '.'
    })
  }, (argv) => {
    console.log('creating files..');

    copydir(path.join(__dirname.replace('/bin', ''), 'lib'), process.cwd(), err => {
      if (!err) {
        const npmInstall = ora('loading packages..').start();

        exec(`cd ${process.cwd()} && npm i`, (err, stdout, stderr) => {
          npmInstall.stop();

          console.log('packages installed..');
        });
      }
    })
  })
  .command('start', 'start the server', (yargs) => {
    yargs.option('dir', {
      describe: 'project directory',
      default: '.'
    })
  }, (argv) => {
    if (! argv[1]){
      argv[1] = 'bin/www'
      console.log('default entry is bin/www')
    }
    var entry = require('path').resolve(process.cwd(),  argv[1])

    runner(entry, is_cli=true);
  })
  .argv
