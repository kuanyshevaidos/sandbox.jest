import * as fs from 'fs';

export class MyFS {
    static getFilesInDir(path: string) {
        return fs.readdirSync(path);
    }
}