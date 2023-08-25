import inquirer from 'inquirer';
import { execSync } from 'child_process';

import buildReactCustomProject from './buildReactCustomProject';
import { REACT_BUILD_TYPES, BUILD_TYPE_ENUM } from '../config';
import spinner from '../utils/spinner';
import customExec from '../utils/customExec';

async function buildReactProject(name: string, hasTypescript: boolean) {
  const { buildType } = await inquirer.prompt({
    name: 'buildType',
    type: 'list',
    choices: REACT_BUILD_TYPES,
    message: '请选择构建项目的方式',
  });
  spinner.start('正在拉取项目');
  switch (buildType) {
    case BUILD_TYPE_ENUM.cra:
      await customExec(
        `npx create-react-app ${name}${
          hasTypescript ? ' --template typescript' : ''
        }`
      );
      break;
    case BUILD_TYPE_ENUM.vite:
      await customExec(
        `npm create vite ${name} --template ${
          hasTypescript ? 'react-ts' : 'react'
        }`
      );
      break;
    case BUILD_TYPE_ENUM.umi:
      execSync(`mkdir ${name}`);
      execSync(`cd ${name}`);
      await customExec('npm create umi');
      break;
    case BUILD_TYPE_ENUM.custom:
      await buildReactCustomProject(name);
      break;
    default:
      break;
  }
  spinner.succeed('创建成功');
}

export default buildReactProject;
