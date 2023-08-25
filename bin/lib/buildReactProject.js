"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const shell = __importStar(require("shelljs"));
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
            case config_1.BUILD_REACT_TYPE_ENUM.cra:
                yield (0, customExec_1.default)(`npx create-react-app ${name}${hasTypescript ? ' --template typescript' : ''}`);
                break;
            case config_1.BUILD_REACT_TYPE_ENUM.vite:
                yield (0, customExec_1.default)(`npm create vite ${name} --template ${hasTypescript ? 'react-ts' : 'react'}`);
                break;
            case config_1.BUILD_REACT_TYPE_ENUM.umi:
                shell.mkdir(name);
                shell.cd(name);
                yield (0, customExec_1.default)('npm create umi');
                break;
            case config_1.BUILD_REACT_TYPE_ENUM.custom:
                yield (0, buildReactCustomProject_1.default)(name);
                break;
            default:
                break;
        }
        spinner_1.default.succeed('创建成功');
    });
}
exports.default = buildReactProject;
