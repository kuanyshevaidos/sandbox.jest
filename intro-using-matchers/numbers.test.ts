// toBe
// toEqual
// toBeGreaterThan
// toBeLessThan
// toBeGreaterThanOrEqual
// toBeLessThanOrEqual


test('K plus N is more than or equal to N in case N <= 0', () => {
    const N = -10;

    for(let i = 0; i<1000; i+=10) {
        expect(N + i).toBeGreaterThanOrEqual(N);
        expect(N + i).toBeGreaterThan(N - 1);
        expect(N + i).not.toBeLessThan(N);
        expect(N + i).not.toBeLessThanOrEqual(N - 1);
    }
});