function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    d.sort((a,b) => {
        return a - b;
    });
    
    for(let i = 0; i < d.length; i++) {
        sum += d[i];
        if(sum > budget) break;    
        answer++;
    }
    
    return answer;
}