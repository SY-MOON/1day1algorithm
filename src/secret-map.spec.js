const solution = require('./secret-map')
test('두 지도를 합쳐', () => {
    expect(['#####','# # #','### #','#  ##','#####']).toStrictEqual(solution(5, [9,20,28,18,11], [30,1,21,17,28]));
});