function solution(a, b) {
    var answer = '';
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    let setDate = new Date(2016, a-1, b);
    answer = days[setDate.getDay()];
    
    return answer;
}

module.exports = solution