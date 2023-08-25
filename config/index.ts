export enum FRAME_ENUM {
  react = 'react',
  vue = 'vue',
  svelte = 'svelte',
  miniPrograme = '小程序',
}

export enum BUILD_TYPE_ENUM {
  cra = 'create react app',
  vite = 'create vite',
  umi = 'umi',
  custom = '自定义',
}

// 框架
export const FRAMES = [
  FRAME_ENUM.react,
  FRAME_ENUM.vue,
  FRAME_ENUM.svelte,
  FRAME_ENUM.miniPrograme,
];

// 脚手架构建方式
export const REACT_BUILD_TYPES = [
  BUILD_TYPE_ENUM.cra,
  BUILD_TYPE_ENUM.vite,
  BUILD_TYPE_ENUM.umi,
  BUILD_TYPE_ENUM.custom,
];
