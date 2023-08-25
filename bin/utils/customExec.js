"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function customExec(command) {
    return new Promise((resolve, reject) => {
        var _a, _b;
        const childProcess = (0, child_process_1.exec)(command);
        // 主进程接收子进程的stdout（标准输出流），用于显示子进程执行过程中的log
        (_a = childProcess.stdout) === null || _a === void 0 ? void 0 : _a.pipe(process.stdout);
        (_b = childProcess.stderr) === null || _b === void 0 ? void 0 : _b.pipe(process.stderr);
        childProcess.on('close', () => resolve('child process close'));
        childProcess.on('exit', () => resolve('child process exit'));
        childProcess.on('error', () => reject('child process error'));
        childProcess.on('disconnect', () => reject('child process disconnect'));
        return childProcess;
    });
}
exports.default = customExec;
