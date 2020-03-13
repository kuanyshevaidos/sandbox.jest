// toMatch - works with regExp

test('there is no "I" in "team"', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "Hab" in "GitHab"', () => {
    expect('GitHab').toMatch(/Hab/);
});
