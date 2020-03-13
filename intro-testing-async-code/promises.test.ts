import { fetchDataViaPromise, fetchErrorViaPromise } from './fetches';

test('the data is "some data"', () => {
    return fetchDataViaPromise().then(data => {
        expect(data).toBe('some data');
    });
});

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchErrorViaPromise().catch(e => expect(e).toMatch('some data'));
});


// Resolves / Rejects
test('the data is "some data"', () => {
    return expect(fetchDataViaPromise()).resolves.toBe('some data');
});

test('the fetch fails with an error', () => {
    return expect(fetchErrorViaPromise()).rejects.toBe('some data');
});


// Async / Await
test('the data is "some data"', async () => {
    const data = await fetchDataViaPromise();
    expect(data).toBe('some data');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchErrorViaPromise();
    } catch(e) {
        expect(e).toBe('some data');
    }
});