test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('object assignment', () => {
    const user = {
        name: 'John',
        surname: 'Kitchen'
    };
    expect(user).toEqual({
        name: 'John',
        surname: 'Kitchen'
    });
});

test('sum of 1 and any number from 0 to 10 is not equal to 0', () => {
    for (let i = 0; i < 11; i++) {
        expect(1 + i).not.toBe(0);
    }
});