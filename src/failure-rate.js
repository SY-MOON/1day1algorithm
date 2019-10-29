function solution(N, stages) {
    var answer = [];
    
    for(let i = 0; i < N; i++) {
        let curStage =  stages.filter(val => val == i+1).length;      
        let clearUser = stages.filter(val => val >= i+1).length;
       
    	let result = 0;
        if(clearUser == 0 || curStage == 0) { 
            result = 0;
        } else {
            result = curStage / clearUser; 
        }
        
        answer.push([i+1, result]);
    }
    
    return answer.sort((a,b) => b[1] - a[1]).map(val => val[0]);
}

module.exports = solution