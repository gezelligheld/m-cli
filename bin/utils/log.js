"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class Log {
    info(text) {
        console.log(chalk_1.default.blueBright(text));
    }
    error(text) {
        console.log(chalk_1.default.redBright(text));
    }
    success(text) {
        console.log(chalk_1.default.greenBright(text));
    }
}
exports.default = new Log();
