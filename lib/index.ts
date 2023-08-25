import checkFileExist from './checkFileExist';
import selectFrame from './selectFrame';
import buildReactProject from './buildReactProject';
import buildMiniProgrameProject from './buildMiniProgrameProject';
import needTypescript from './needTypescript';
import { FRAME_ENUM } from '../config';
import clearConsole from '../utils/clearConsole';
import log from '../utils/log';

interface Option {
  force: boolean;
}

async function create(name: string, options: Partial<Option>) {
  try {
    // 检查是否目录已经存在
    await checkFileExist(name, !!options.force);
    clearConsole();
    const frame = await selectFrame();
    switch (frame) {
      case FRAME_ENUM.react:
        const hasTypescript = await needTypescript();
        await buildReactProject(name, hasTypescript);
        break;
      case FRAME_ENUM.miniPrograme:
        await buildMiniProgrameProject(name);
        break;
      default:
        log.info('敬请期待');
        process.exit(1);
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

export default create;
