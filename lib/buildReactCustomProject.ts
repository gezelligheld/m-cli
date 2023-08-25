import * as shell from 'shelljs';

import { copyFileTemplate, copyFolderTemplate } from '../utils/copy';

async function buildReactCustomProject(name: string) {
  shell.mkdir(name);
  shell.cd(name);
  shell.exec('npm init -y');

  // git
  copyFileTemplate('git/.gitignore', '.gitignore');
  shell.exec('git init');
  // react
  copyFolderTemplate('react-vite', '');
}

export default buildReactCustomProject;
