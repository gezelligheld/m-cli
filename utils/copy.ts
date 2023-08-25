import fs from 'fs-extra';
import path from 'path';

export function copyFileTemplate(source: string, target: string) {
  fs.copyFileSync(
    path.join(__dirname, '..', `../templates/${source}`),
    path.join(process.cwd(), target)
  );
}

export function copyFolderTemplate(source: string, target: string) {
  fs.copySync(
    path.join(__dirname, '..', `../templates/${source}`),
    path.join(process.cwd(), target)
  );
}
