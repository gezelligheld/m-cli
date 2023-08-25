import inquirer from 'inquirer';
import * as shell from 'shelljs';

import {
  BUILD_MINI_PROJECT_TYPE_ENUM,
  MINI_PROJECT_BUILD_TYPES,
} from '../config';
import spinner from '../utils/spinner';
import customExec from '../utils/customExec';

async function buildMiniProgrameProject(name: string) {
  const { buildType } = await inquirer.prompt({
    name: 'buildType',
    type: 'list',
    choices: MINI_PROJECT_BUILD_TYPES,
    message: '请选择构建项目的方式',
  });
  spinner.start('正在拉取项目');
  switch (buildType) {
    case BUILD_MINI_PROJECT_TYPE_ENUM.taro:
      await customExec('npm install -g @tarojs/cli');
      await customExec(`taro init ${name}`);
      break;
    default:
      break;
  }
  spinner.succeed('创建成功');
}

export default buildMiniProgrameProject;
