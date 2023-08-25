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
const inquirer_1 = __importDefault(require("inquirer"));
const config_1 = require("../config");
const spinner_1 = __importDefault(require("../utils/spinner"));
const customExec_1 = __importDefault(require("../utils/customExec"));
function buildMiniProgrameProject(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const { buildType } = yield inquirer_1.default.prompt({
            name: 'buildType',
            type: 'list',
            choices: config_1.MINI_PROJECT_BUILD_TYPES,
            message: '请选择构建项目的方式',
        });
        spinner_1.default.start('正在拉取项目');
        switch (buildType) {
            case config_1.BUILD_MINI_PROJECT_TYPE_ENUM.taro:
                yield (0, customExec_1.default)('npm install -g @tarojs/cli');
                yield (0, customExec_1.default)(`taro init ${name}`);
                break;
            default:
                break;
        }
        spinner_1.default.succeed('创建成功');
    });
}
exports.default = buildMiniProgrameProject;