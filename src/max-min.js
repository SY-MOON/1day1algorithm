function maxMin(k, arr) {
    let minUnfairness = Number.MAX_SAFE_INTEGER;
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++) {
        let unfairness = arr[i+k-1] - arr[i];
        if(unfairness === 0) {
            minUnfairness = 0;
            break;
        }
        if(minUnfairness > unfairness) {
            minUnfairness = unfairness;
        }
    }
    return minUnfairness;
};