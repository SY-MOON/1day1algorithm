function solution(n){ 
    //첫번째 풀이
    //return n.toString().split('').reduce((prev,curr)=> Number(prev) + Number(curr))

    let answer = 0; 
    let letters = n.toString(); 
    for(let i = 0; i < letters.length; i++) {
        answer += Number(letters[i]); 
    } 
    return answer 
}
