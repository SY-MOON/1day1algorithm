const aVeryBigSum = require('./a-very-big-sum')
test('주어진 arr의 총 합계', () => {
	expect(5000000015).toBe(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
});