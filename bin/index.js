#!/usr/bin/env node

const copydir = require('copy-dir');
const path = require('path');
const ora = require('ora');
const { exec } = require('child_process');

require('yargs')
  .command('init', 'start the server', (yargs) => {
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
  .argv
