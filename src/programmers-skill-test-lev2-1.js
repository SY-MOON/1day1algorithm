function solution(s){   
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        const target = stack.pop();

        if(!target) {
            stack.push(s[i]);
            continue;
        }
        
        if(target != s[i]) {
            stack.push(target, s[i]);
            continue;
        }
    }
    
    return stack.length == 0 ? 1 : 0;
}

module.exports = solution