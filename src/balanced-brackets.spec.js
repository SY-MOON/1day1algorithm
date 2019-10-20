const isBalanced = require('./balanced-brackets')
test('괄호 짝이 맞나요', () => {
    expect('YES').toBe(isBalanced('{[()]}'));
});
test('괄호 짝이 맞나요', () => {
    expect('NO').toBe(isBalanced('{[(])}'));
});