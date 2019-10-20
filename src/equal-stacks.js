function equalStacks(h1, h2, h3) {
    let stacks = [h1, h2, h3];
    let temp = [];
    let result = 0;

    for(let i = 0; i < stacks.length; i++) {
        let sum = 0;
        for(let j = stacks[i].length - 1; j >= 0; j--) {
            sum += stacks[i][j];
            temp.push(sum);
        }
        stacks[i] = temp.reverse();
        temp = [];
    }
    stacks.sort(function(a,b) {
        return a.length - b.length;
    });
    for(let i = 0; i < stacks[0].length; i++) {
        let num = stacks[0][i];
        if(stacks[1].includes(num) && stacks[2].includes(num)) {
            result = num;
            break;
        }
    }
    return result;
}

module.exports = equalStacks