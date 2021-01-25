#! /usr/bin/env node
const path = require("path");
const fs = require("fs");
console.log(process.env.npm_config_argv);
const paths = JSON.parse(process.env.npm_config_argv).remain;
console.log(paths[0]);
const file = path.join(paths[0], "push.js");
console.log(file);
const res = fs.readFileSync(file, 'utf-8');
console.log(res);
console.log("test-command");
