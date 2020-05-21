function solution(num) {
    var answer = 0;
    for(let i = 0; i < 500; i++) {
        if(num == 1) break;
        
        if(num % 2) {
            num = num * 3 + 1;
        } else {
            num /= 2;
        }
        answer++;
    }
    
    if(num > 1) answer = -1;
    
    return answer;
}