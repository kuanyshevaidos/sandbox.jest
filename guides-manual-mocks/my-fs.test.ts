jest.mock('fs');
import { MyFS } from './my-fs';

describe('listFilesInDirectorySync', () => {
    const MOCK_FILE_INFO = {
        '/path/to2/': ['a', 'b'],
        '/path/to/': ['1', '2'],
    };

    beforeEach(() => {
        // Set up some mocked out file info before each test
        require('fs').__setMockFiles(MOCK_FILE_INFO);
    });

    test('includes all files in the directory in the summary', () => {
        const fileSummary = MyFS.getFilesInDir(
            '/path/to2/',
        );

        expect(fileSummary.length).toBe(2);
        expect(fileSummary).toContain('a');
        expect(fileSummary).toContain('b');
    });
});