#! /usr/bin/env node

import { program } from 'commander';

import create from './lib';
import packageJson from './package.json';

// 创建项目
program
  .command('create <app-name>')
  .description('create a new project')
  // -f or --force 强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', 'overwrite target directory if it exist')
  .action((name, options) => {
    create(name, options);
  });

// 配置版本号信息
program
  .version(`v${packageJson.version}`, '-v, --version')
  .usage('<command> [option]');

// 监听 --help 执行
program.on('--help', () => {
  console.log(123);
});

// 解析用户执行命令传入参数
program.parse(process.argv);
