import { fetchDataViaCallback } from './fetches';

// Do not use callbacks like shown below. BAD PRACTICE EXAMPLE
// The problem is that the test will complete as soon as fetchDataViaCallback completes,
// before ever calling the callback.

test('callbacks, bad practice: the data is "some data"', () => {
    function callback(data: string) {
        expect(data).toBe('some data');
    }

    fetchDataViaCallback(callback);
});


// How to use callbacks ?
// 3.. 2.. 1...
test('callbacks, good practice: the data is "some data"', done => {
    function callback(data: string) {
        try {
            expect(data).toBe('some data');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchDataViaCallback(callback);
});


