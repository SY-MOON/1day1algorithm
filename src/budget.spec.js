const solution = require('./budget')
test('최대 몇 개 부서에 지원을 해줄 수 있나요', () => {
    expect(3).toBe(solution([1,3,2,5,4], 9));
});
