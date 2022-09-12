const solution = require('./deleteDigit.js');

test('test 1', () => {
    expect(solution(152)).toBe(52);
});

test('test 2', () => {
    expect(solution(1001)).toBe(101);
});

test('test 3', () => {
    expect(solution(10)).toBe(1);
});

test('test 4', () => {
    expect(solution(222219)).toBe(22229);
});

test('test 5', () => {
    expect(solution(109)).toBe(19);
});

test('test 6', () => {
    expect(solution(222250)).toBe(22250);
});

test('test 7', () => {
    expect(solution(44435)).toBe(4445);
});

test('test 8', () => {
    expect(solution(12)).toBe(2);
});

test('test 9', () => {
    expect(solution(218616)).toBe(28616);
});

test('test 10', () => {
    expect(solution(861452)).toBe(86452);
});
