const solution = require('./find-kim')
test('배열에서 김서방을 찾아라', () => {
    expect("김서방은 1에 있다").toBe(solution(["Jane", "Kim"]));
});
