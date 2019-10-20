function getMinimumCost(k, c) {
    let totalPrice = 0;
    if(k == c.length) {
        for(let i = 0; i < k; i++) {
            totalPrice += c[i];
        }
    } else {
        c.sort((a, b)=> a - b);
        let repurchase = 0;
        let currentPrice = 0; 
        let customer = 0;
        for(let i = (c.length - 1); i >= 0; i--) {
            currentPrice = (repurchase + 1) * c[i];
            totalPrice += currentPrice;
            customer++;
            if(customer % k == 0) repurchase++;
        }
    }
    return totalPrice;
}

module.exports = getMinimumCost