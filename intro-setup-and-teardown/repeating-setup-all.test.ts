describe('match popular sites with before all and after all init', () => {
    let popularSites = new Set();

    // BEFORE ALL / AFTER ALL
    beforeAll(() => {
        popularSites = new Set([
            'www.google.com',
            'www.facebook.com',
            'www.twitter.com',
            'www.youtube.com'
        ]);
    });

    afterAll(() => {
        popularSites = new Set();
    });

    test('www.twitter.com should be popular', () => {
        expect(popularSites.has('www.twitter.com')).toBeTruthy();
    });

    test('www.copy-of-twitter.org should not be popular', () => {
        expect(popularSites.has('www.copy-of-twitter.org')).not.toBeTruthy();
    });
});