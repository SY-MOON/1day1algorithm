function solution(dartResult) {
    let result = dartResult.split(/(\d+\D\W|\d+\D)/).filter(Boolean);
    let score = [];
    
    for(let i = 0; i < result.length; i++) {
        let num = 0;
        result[i] = result[i].split(/(\d+)(\D)/).filter(Boolean);
        if(result[i][1].includes('S')) num = 1
        if(result[i][1].includes('D')) num = 2
        if(result[i][1].includes('T')) num = 3
        
        score.push(Math.pow(result[i][0], num));
        
        if(result[i][2] == '#') score[i] *= -1;
        if(result[i][2] == '*') {
            score[i] *= 2;
            score[i-1] *= 2;
        }
    }
    
    return score.reduce((acc, cur) => acc + cur);
    
}

module.exports = solution