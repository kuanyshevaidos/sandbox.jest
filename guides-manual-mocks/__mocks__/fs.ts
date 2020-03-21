import * as fs from 'fs'

type fsType = typeof fs;
const fsModule = jest.genMockFromModule<fsType & {
    __setMockFiles:  (newMockFiles: {[path: string]: string[]}) => void,

}>('fs');

let mockFiles: {[path: string]: string[]} = Object.create(null);
function __setMockFiles(newMockFiles: {}) {
    mockFiles = newMockFiles;
}

function readdirSync(directoryPath: fs.PathLike) {
    return mockFiles[String(directoryPath)] || [];
}

fsModule.__setMockFiles = __setMockFiles;
// @ts-ignore
fsModule.readdirSync = readdirSync;

type c = ReturnType<typeof fs.readdirSync>
module.exports = fsModule;