// toBe(value) - the same as resultOfExec === value
// toEqual - to compare objects like deepEqual
// toBeNull() - as resultOfExec === null
// toBeUndefined() - as resultOfExec === undefined
// tobeDefined() - as resultOfExec !== undefined
// toBeTruthy() - as !!(resultOfExec) === true
// toBeFalsy() - as !!(resultOfExec) === false
// ...

test('is null', () => {
    const n = null;
    expect(n).toBe(null);
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('is zero', () => {
    const n = 0;
    expect(n).toBe(0);
    expect(n).not.toBeNull();
    expect(n).not.toBeNaN();
    expect(n).not.toBeUndefined();
    expect(n).toBeDefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});