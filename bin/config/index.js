"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MINI_PROJECT_BUILD_TYPES = exports.REACT_BUILD_TYPES = exports.FRAMES = exports.BUILD_MINI_PROJECT_TYPE_ENUM = exports.BUILD_REACT_TYPE_ENUM = exports.FRAME_ENUM = void 0;
var FRAME_ENUM;
(function (FRAME_ENUM) {
    FRAME_ENUM["react"] = "react";
    FRAME_ENUM["vue"] = "vue";
    FRAME_ENUM["svelte"] = "svelte";
    FRAME_ENUM["miniPrograme"] = "\u5C0F\u7A0B\u5E8F";
})(FRAME_ENUM || (exports.FRAME_ENUM = FRAME_ENUM = {}));
var BUILD_REACT_TYPE_ENUM;
(function (BUILD_REACT_TYPE_ENUM) {
    BUILD_REACT_TYPE_ENUM["cra"] = "create react app";
    BUILD_REACT_TYPE_ENUM["vite"] = "create vite";
    BUILD_REACT_TYPE_ENUM["umi"] = "umi";
    BUILD_REACT_TYPE_ENUM["custom"] = "\u81EA\u5B9A\u4E49";
})(BUILD_REACT_TYPE_ENUM || (exports.BUILD_REACT_TYPE_ENUM = BUILD_REACT_TYPE_ENUM = {}));
var BUILD_MINI_PROJECT_TYPE_ENUM;
(function (BUILD_MINI_PROJECT_TYPE_ENUM) {
    BUILD_MINI_PROJECT_TYPE_ENUM["taro"] = "taro";
    BUILD_MINI_PROJECT_TYPE_ENUM["uniApp"] = "uni-app";
})(BUILD_MINI_PROJECT_TYPE_ENUM || (exports.BUILD_MINI_PROJECT_TYPE_ENUM = BUILD_MINI_PROJECT_TYPE_ENUM = {}));
// 框架
exports.FRAMES = [
    FRAME_ENUM.react,
    FRAME_ENUM.vue,
    FRAME_ENUM.svelte,
    FRAME_ENUM.miniPrograme,
];
// react构建方式
exports.REACT_BUILD_TYPES = [
    BUILD_REACT_TYPE_ENUM.cra,
    BUILD_REACT_TYPE_ENUM.vite,
    BUILD_REACT_TYPE_ENUM.umi,
    BUILD_REACT_TYPE_ENUM.custom,
];
// 小程序构建方式
exports.MINI_PROJECT_BUILD_TYPES = [
    BUILD_MINI_PROJECT_TYPE_ENUM.taro,
    BUILD_MINI_PROJECT_TYPE_ENUM.uniApp,
];
