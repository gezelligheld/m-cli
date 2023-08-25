import inquirer from 'inquirer';

import { FRAMES } from '../config';

async function selectFrame() {
  const { frame } = await inquirer.prompt({
    name: 'frame',
    type: 'list',
    choices: FRAMES,
    message: '请选择所使用的框架',
  });
  return frame;
}

export default selectFrame;
