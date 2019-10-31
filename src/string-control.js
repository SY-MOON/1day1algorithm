function solution(s) {
    var answer = false;
    if(Number(s) && s.includes('e')) return answer;
    (s.length == 4 || s.length ==6) && Number(s) ? answer = true : answer;
    return answer
}

module.exports = solution