"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REACT_BUILD_TYPES = exports.FRAMES = exports.BUILD_TYPE_ENUM = exports.FRAME_ENUM = void 0;
var FRAME_ENUM;
(function (FRAME_ENUM) {
    FRAME_ENUM["react"] = "react";
    FRAME_ENUM["vue"] = "vue";
    FRAME_ENUM["svelte"] = "svelte";
    FRAME_ENUM["miniPrograme"] = "\u5C0F\u7A0B\u5E8F";
})(FRAME_ENUM || (exports.FRAME_ENUM = FRAME_ENUM = {}));
var BUILD_TYPE_ENUM;
(function (BUILD_TYPE_ENUM) {
    BUILD_TYPE_ENUM["cra"] = "create react app";
    BUILD_TYPE_ENUM["vite"] = "create vite";
    BUILD_TYPE_ENUM["umi"] = "umi";
    BUILD_TYPE_ENUM["custom"] = "\u81EA\u5B9A\u4E49";
})(BUILD_TYPE_ENUM || (exports.BUILD_TYPE_ENUM = BUILD_TYPE_ENUM = {}));
// 框架
exports.FRAMES = [
    FRAME_ENUM.react,
    FRAME_ENUM.vue,
    FRAME_ENUM.svelte,
    FRAME_ENUM.miniPrograme,
];
// 脚手架构建方式
exports.REACT_BUILD_TYPES = [
    BUILD_TYPE_ENUM.cra,
    BUILD_TYPE_ENUM.vite,
    BUILD_TYPE_ENUM.umi,
    BUILD_TYPE_ENUM.custom,
];
