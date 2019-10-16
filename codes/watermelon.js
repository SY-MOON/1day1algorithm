function solution(n) {
    var answer = '';
    let watermelon = [];
    for(let i = 0; i < n; i++) {
        i % 2 ? watermelon.push('박') : watermelon.push('수');
    }
    answer = watermelon.join('');
    return answer;
}