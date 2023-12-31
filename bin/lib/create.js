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
const checkFileExist_1 = __importDefault(require("./checkFileExist"));
const clearConsole_1 = __importDefault(require("../utils/clearConsole"));
function create(name, options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 检查是否目录已经存在
            yield (0, checkFileExist_1.default)(name, !!options.force);
            (0, clearConsole_1.default)();
        }
        catch (e) {
            console.log(e);
            process.exit(1);
        }
    });
}
exports.default = create;
