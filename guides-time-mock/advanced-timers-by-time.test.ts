test('fake timer, advancedTimersByTime', () => {
    jest.useFakeTimers();

    let a = 0;
    setTimeout(() => {
        a = 10
    }, 10 * 60 * 1000);

    jest.advanceTimersByTime(5 * 60 * 1000);
    expect(a).toBe(0);
    expect(jest.getTimerCount()).toBe(1);

    jest.advanceTimersByTime(4 * 60 * 1000);
    expect(a).toBe(0);
    expect(jest.getTimerCount()).toBe(1);

    jest.advanceTimersByTime(60 * 1000);
    expect(a).toBe(10);
    expect(jest.getTimerCount()).toBe(0);
});


