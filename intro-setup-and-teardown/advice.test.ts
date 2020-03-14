// Use test.only to check only one test in scope
// it only works for scope: in file, or inside describe function callback
test.only('this will be the only test that runs', () => {
    expect(true).not.toBe(false);
});

test('this test will not run', () => {
    expect('A').toBe('A');
});