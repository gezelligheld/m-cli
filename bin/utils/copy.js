"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyFolderTemplate = exports.copyFileTemplate = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
function copyFileTemplate(source, target) {
    fs_extra_1.default.copyFileSync(path_1.default.join(__dirname, '..', `../templates/${source}`), path_1.default.join(process.cwd(), target));
}
exports.copyFileTemplate = copyFileTemplate;
function copyFolderTemplate(source, target) {
    fs_extra_1.default.copySync(path_1.default.join(__dirname, '..', `../templates/${source}`), path_1.default.join(process.cwd(), target));
}
exports.copyFolderTemplate = copyFolderTemplate;
