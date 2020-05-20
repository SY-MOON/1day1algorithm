function solution(x) {
    var answer = true;
    let result = x.toString().split('').reduce((prev, curr) =>{
        return Number(prev) + Number(curr);
    })
    if(x % result) answer = false;
    return answer;
}