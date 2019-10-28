function solution(s){
    var answer = true;
    let arr = s.toLowerCase().split('');
    let p = arr.filter(val => val == 'p').length;
    let y = arr.filter(val => val == 'y').length;
    
    if(p != y) answer = false;

    return answer;
}

module.exports = solution