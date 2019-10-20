function solution(s) {
    var answer = '';
    let splited = s.toLowerCase().split(" ");
    for(let i = 0; i < splited.length; i++) {
        splited[i] = splited[i].charAt(0).toUpperCase() + splited[i].slice(1);
    }
    answer = splited.join(" ");
    return answer;
}

module.exports = solution