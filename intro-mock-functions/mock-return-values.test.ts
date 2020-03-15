describe('myMock direct call, mockReturnValueOnceTest', () => {
    const myMock = jest.fn();
    console.log(myMock());
    // > undefined

    myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce('x')
        .mockReturnValue(true);

// console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true

    test('first myMockCall should return 10', () => {
        expect(myMock()).toBe(10);
    });

    test('second myMockCall should return x', () => {
        expect(myMock()).toBe('x');
    });

});


describe('filterMock call, mockReturnValueOnceTest', () => {
    const filterMock = jest
        .fn()
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false);

    const filteredResult = [1,2].filter(it => filterMock(it));
    // should be [1];

    test('filterMock test', () => {
        expect(filteredResult).toEqual([1]);
    });

});
