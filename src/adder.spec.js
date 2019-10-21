const solution = require('./adder')
test('주어진 a,b 사이 값의 전체 합', () => {
    expect(12).toBe(solution(3, 5));
});
test('주어진 a,b 사이 값의 전체 합', () => {
    expect(12).toBe(solution(5, 3));
});