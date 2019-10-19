function solution(s) {
    var answer = '';
    let words = s.toUpperCase().split(' ');
    
    for(let i = 0; i < words.length; i++) {
        let word = words[i].split('');
        let newWord = word.map(function(w, index){
            if(index % 2 == 0) {
                return w
            } else {
                w = w.toLowerCase();
                console.log(w)
                return w;
            }
        }).join('');
        words[i] = newWord;
    }
    answer = words.join(' ');
    return answer;
}