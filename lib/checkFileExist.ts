import fs from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';

import log from '../utils/log';
import spinner from '../utils/spinner';

async function remove(path: string) {
  try {
    spinner.start('正在删除文件');
    await fs.remove(path);
    spinner.succeed('删除完成');
  } catch {
    spinner.fail('删除失败');
    process.exit(1);
  }
}

async function checkFileExist(name: string, force: boolean) {
  // 当前命令行所在路径
  const cwd = process.cwd();
  const targetPath = path.join(cwd, name);
  if (!fs.existsSync(targetPath)) {
    return;
  }
  if (force) {
    await remove(targetPath);
  } else {
    const { cover } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'cover',
        message: '是否要覆盖同名的文件夹',
        default: '',
      },
    ]);
    if (cover) {
      await remove(targetPath);
    } else {
      log.info('请选择合适的目录');
      process.exit(1);
    }
  }
}

export default checkFileExist;
