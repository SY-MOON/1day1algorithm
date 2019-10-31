function solution(s) {
    var answer = false;
    (s.length == 4 || s.length ==6) && Number(s) ? answer = true : answer;
    return answer
}

module.exports = solution