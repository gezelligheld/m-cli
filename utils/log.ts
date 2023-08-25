import chalk from 'chalk';

class Log {
  info(text: string) {
    console.log(chalk.blueBright(text));
  }

  error(text: string) {
    console.log(chalk.redBright(text));
  }

  success(text: string) {
    console.log(chalk.greenBright(text));
  }
}

export default new Log();
