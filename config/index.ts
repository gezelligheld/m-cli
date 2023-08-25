export enum FRAME_ENUM {
  react = 'react',
  vue = 'vue',
  svelte = 'svelte',
  miniPrograme = '小程序',
}

export enum BUILD_REACT_TYPE_ENUM {
  cra = 'create react app',
  vite = 'create vite',
  umi = 'umi',
  custom = '自定义',
}

export enum BUILD_MINI_PROJECT_TYPE_ENUM {
  taro = 'taro',
  uniApp = 'uni-app',
}

// 框架
export const FRAMES = [
  FRAME_ENUM.react,
  FRAME_ENUM.vue,
  FRAME_ENUM.svelte,
  FRAME_ENUM.miniPrograme,
];

// react构建方式
export const REACT_BUILD_TYPES = [
  BUILD_REACT_TYPE_ENUM.cra,
  BUILD_REACT_TYPE_ENUM.vite,
  BUILD_REACT_TYPE_ENUM.umi,
  BUILD_REACT_TYPE_ENUM.custom,
];

// 小程序构建方式
export const MINI_PROJECT_BUILD_TYPES = [
  BUILD_MINI_PROJECT_TYPE_ENUM.taro,
  BUILD_MINI_PROJECT_TYPE_ENUM.uniApp,
];
