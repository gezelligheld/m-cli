"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
function copyTemplate(source, target) {
    fs_extra_1.default.copyFileSync(path_1.default.join(__dirname, '..', `../templates/${source}`), path_1.default.join(process.cwd(), target));
}
exports.default = copyTemplate;
