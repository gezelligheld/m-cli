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
const child_process_1 = require("child_process");
const buildReactCustomProject_1 = __importDefault(require("./buildReactCustomProject"));
const config_1 = require("../config");
const spinner_1 = __importDefault(require("../utils/spinner"));
const customExec_1 = __importDefault(require("../utils/customExec"));
function buildReactProject(name, hasTypescript) {
    return __awaiter(this, void 0, void 0, function* () {
        const { buildType } = yield inquirer_1.default.prompt({
            name: 'buildType',
            type: 'list',
            choices: config_1.REACT_BUILD_TYPES,
            message: '请选择构建项目的方式',
        });
        spinner_1.default.start('正在拉取项目');
        switch (buildType) {
            case config_1.BUILD_TYPE_ENUM.cra:
                yield (0, customExec_1.default)(`npx create-react-app ${name}${hasTypescript ? ' --template typescript' : ''}`);
                break;
            case config_1.BUILD_TYPE_ENUM.vite:
                yield (0, customExec_1.default)(`npm create vite ${name} --template ${hasTypescript ? 'react-ts' : 'react'}`);
                break;
            case config_1.BUILD_TYPE_ENUM.umi:
                (0, child_process_1.execSync)(`mkdir ${name}`);
                (0, child_process_1.execSync)(`cd ${name}`);
                yield (0, customExec_1.default)('npm create umi');
                break;
            case config_1.BUILD_TYPE_ENUM.custom:
                yield (0, buildReactCustomProject_1.default)(name);
                break;
            default:
                break;
        }
        spinner_1.default.succeed('创建成功');
    });
}
exports.default = buildReactProject;
