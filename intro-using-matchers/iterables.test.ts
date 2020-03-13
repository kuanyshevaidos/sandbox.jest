// toContain(value) - like expectResult.contains(value);

const countriesToVisitList = [
    'Australia',
    'Belarus',
    'Italy',
    'Greece',
    'Poland',
    'Spain',
];

test('the "countries to visit" list has Belarus and Poland in there', () => {
    expect(countriesToVisitList).toContain('Belarus');
    expect(new Set(countriesToVisitList)).toContain('Poland');
});