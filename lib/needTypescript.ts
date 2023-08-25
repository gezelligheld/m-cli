import inquirer from 'inquirer';

async function needTypescript() {
  const { need } = await inquirer.prompt({
    name: 'need',
    type: 'confirm',
    message: '是否需要typescript',
  });
  return need;
}

export default needTypescript;
