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
const selectFrame_1 = __importDefault(require("./selectFrame"));
const buildReactProject_1 = __importDefault(require("./buildReactProject"));
const buildMiniProgrameProject_1 = __importDefault(require("./buildMiniProgrameProject"));
const needTypescript_1 = __importDefault(require("./needTypescript"));
const config_1 = require("../config");
const clearConsole_1 = __importDefault(require("../utils/clearConsole"));
const log_1 = __importDefault(require("../utils/log"));
function create(name, options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 检查是否目录已经存在
            yield (0, checkFileExist_1.default)(name, !!options.force);
            (0, clearConsole_1.default)();
            const frame = yield (0, selectFrame_1.default)();
            switch (frame) {
                case config_1.FRAME_ENUM.react:
                    const hasTypescript = yield (0, needTypescript_1.default)();
                    yield (0, buildReactProject_1.default)(name, hasTypescript);
                    break;
                case config_1.FRAME_ENUM.miniPrograme:
                    yield (0, buildMiniProgrameProject_1.default)(name);
                    break;
                default:
                    log_1.default.info('敬请期待');
                    process.exit(1);
            }
        }
        catch (e) {
            console.log(e);
            process.exit(1);
        }
    });
}
exports.default = create;
