#!/usr/bin/env node
require('yargs')
.command(require('./commands/default.js'))
.command(require('./commands/walk.js'))
.argv;
