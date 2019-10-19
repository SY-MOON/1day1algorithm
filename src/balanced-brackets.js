function isBalanced(s) {
    let result = 'YES';
    let stack = [];
    let open = ['{', '[', '('];
    let close = ['}', ']', ')'];

    s = s.split('');
    for(let i = 0; i < s.length; i++) {
        if(open.indexOf(s[0]) == -1) {
            result = 'NO'
            break;
        }
        if(open.indexOf(s[i]) != -1) {
            stack.push(s[i]);
        } else if(close.indexOf(s[i]) != -1) {
            let matched = open[close.indexOf(s[i])];
            let prev = stack[stack.length - 1];
            if(matched == prev) { 
                stack.pop() 
            } else {
                result = 'NO';
                break;
            }
        }
    }
    return result
};