function solution(record) {
    let user = {};
    let recodeLenth = record.length;
    let splitList = [];
    
    for(let i = 0; i < recodeLenth; i++){
        let sp = record[i].split(" ");
        
        user[sp[1]] = sp[2] ? sp[2] : user[sp[1]];
        
        if(sp[0] != "Change") {
            splitList.push(sp);
        }
    }
    
    var answer = [];
    
    for(let i = 0, iMax = splitList.length; i < iMax; i++){
        let sp = splitList[i];
        if(sp[0] == "Enter")
            answer.push(user[sp[1]] + "님이 들어왔습니다.");
        else
            answer.push(user[sp[1]]+ "님이 나갔습니다.");
    }
    
    return answer
}

module.exports = solution