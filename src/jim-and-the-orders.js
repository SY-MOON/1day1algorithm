function jimOrders(orders) {
    let result = []
    for(let i = 0; i < orders.length; i++){ 
        orders[i][2] = orders[i][0] + orders[i][1];
        orders[i][3] = i + 1;
    }
     orders.sort(function(a, b) {
        if(a[2] == b[2]) { return a[3] - b[3] }
        return a[2] - b[2]
    }).forEach(function(value) {
        return result.push(value[3]);
    });
    return result.join(" ");
}