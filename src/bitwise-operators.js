function getMaxLessThanK(n, k) {
    let max = 0;
    for(let i = 1; i < n; i++) {
        for(let j = 2; j <= n; j++) {
            if(i < j && i != j) {
                let bitAnd = parseInt(i & j);
                let toDecimal = parseInt(bitAnd, 10)
                if(toDecimal < k) {
                    if(toDecimal > max) max = toDecimal;
                }
            }
        }
    }
    return max;
}


module.exports = getMaxLessThanK