function solution(n, lost, reserve) {
    var answer = 0;
    let list = [];
    
    for(let i = 0; i < n; i++) {
        list[i] = 1;
        if(lost.includes(i+1)) list[i]--;
        if(reserve.includes(i+1)) list[i]++;
    }
    
    for(let j = 0; j < list.length; j++) {
        if(list[j] > 0) answer++;
        if(list[j] == 0 && list[j-1] == 2) {
            list[j] = 1;
            list[j-1] = 1;
            answer++;
        } else if (list[j] == 0 && list[j+1] == 2) {
            list[j] = 1;
            list[j+1] = 1;
            answer++;
        }
    }
    
    return answer;
}