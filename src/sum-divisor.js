function solution(n) {
    if(n === 0) return 0;
    let numbers = [];
    for(let i = 0; i <= n; i++) {
        if(n % i === 0) numbers.push(i);
    }
    return numbers.reduce((acc, cur) => acc + cur);
}

module.exports = solution