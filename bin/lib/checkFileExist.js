"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const inquirer_1 = __importDefault(require("inquirer"));
const log_1 = __importDefault(require("../utils/log"));
const spinner_1 = __importDefault(require("../utils/spinner"));
function remove(path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            spinner_1.default.start('正在删除文件');
            yield fs_extra_1.default.remove(path);
            spinner_1.default.succeed('删除完成');
        }
        catch (_a) {
            spinner_1.default.fail('删除失败');
            process.exit(1);
        }
    });
}
function checkFileExist(name, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // 当前命令行所在路径
        const cwd = process.cwd();
        const targetPath = path_1.default.join(cwd, name);
        if (!fs_extra_1.default.existsSync(targetPath)) {
            return;
        }
        if (force) {
            yield remove(targetPath);
        }
        else {
            const { cover } = yield inquirer_1.default.prompt([
                {
                    type: 'confirm',
                    name: 'cover',
                    message: '是否要覆盖同名的文件夹',
                    default: '',
                },
            ]);
            if (cover) {
                yield remove(targetPath);
            }
            else {
                log_1.default.info('请选择合适的目录');
                process.exit(1);
            }
        }
    });
}
exports.default = checkFileExist;
