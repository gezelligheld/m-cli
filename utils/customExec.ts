import { exec } from 'child_process';

function customExec(command: string) {
  return new Promise((resolve, reject) => {
    const childProcess = exec(command);
    // 主进程接收子进程的stdout（标准输出流），用于显示子进程执行过程中的log
    childProcess.stdout?.pipe(process.stdout);
    childProcess.stderr?.pipe(process.stderr);
    childProcess.on('close', () => resolve('child process close'));
    childProcess.on('exit', () => resolve('child process exit'));
    childProcess.on('error', () => reject('child process error'));
    childProcess.on('disconnect', () => reject('child process disconnect'));
    return childProcess;
  });
}

export default customExec;
