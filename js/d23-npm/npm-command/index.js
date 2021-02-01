#! /usr/bin/env node
const path = require("path");
const fs = require("fs");
console.log(process.env.npm_config_argv);
const paths = JSON.parse(process.env.npm_config_argv).remain;
console.log(paths[0]);
const res = fs.readFileSync(path.join(process.cwd(), paths[0]), "utf-8");
console.log(res);
console.log("test-command done");
