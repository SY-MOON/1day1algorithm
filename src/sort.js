function solution(strings, n) {

    return strings.sort().sort((a,b) => {
        if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1;
        if(a > b) return 1;
        if(a == b) return 0;
        return -1;
    })
}

module.exports = solution