function solution(s) {
    var answer = '';
    let mid = Math.ceil(s.length / 2) - 1;
    if(s.length % 2) {
        answer = s.charAt(mid)
    } else {
        answer = s.slice(mid, mid + 2);
    }
    return answer;
}