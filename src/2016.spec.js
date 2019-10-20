const solution = require('./2016')
test('주어진 a,b가 2016년에서 무슨 요일일까?', () => {
	expect('FRI').toBe(solution(1, 1));
});
test('주어진 a,b가 2016년에서 무슨 요일일까?', () => {
	expect('TUE').toBe(solution(5, 24));
});