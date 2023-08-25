#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const lib_1 = __importDefault(require("./lib"));
const package_json_1 = __importDefault(require("./package.json"));
// 创建项目
commander_1.program
    .command('create <app-name>')
    .description('create a new project')
    // -f or --force 强制创建，如果创建的目录存在则直接覆盖
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((name, options) => {
    (0, lib_1.default)(name, options);
});
// 配置版本号信息
commander_1.program
    .version(`v${package_json_1.default.version}`, '-v, --version')
    .usage('<command> [option]');
// 监听 --help 执行
commander_1.program.on('--help', () => {
    console.log(123);
});
// 解析用户执行命令传入参数
commander_1.program.parse(process.argv);
