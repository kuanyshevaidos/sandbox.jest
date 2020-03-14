describe('match popular sites with before each and after each init', () => {
    let popularSites = new Set();

    beforeEach(() => {
        popularSites = new Set([
            'www.google.com',
            'www.facebook.com',
            'www.twitter.com',
            'www.youtube.com'
        ]);
    });

    afterEach(() => {
        popularSites = new Set();
    });

    test('www.facebook.com should be popular', () => {
        expect(popularSites.has('www.facebook.com')).toBeTruthy();
    });

    test('www.test1233421.org should not be popular', () => {
        expect(popularSites.has('www.test1233421.org')).not.toBeTruthy();
    });
});