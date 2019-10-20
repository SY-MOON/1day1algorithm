function timeConversion(s) {
    let hours= s[0]+s[1];
    if(s.includes('PM') && hours < 12) {
        let time = Number(hours);
        time = time += 12;
        return s.replace(hours, time).slice(0,8);
    } else {
        if(s.includes('AM') && hours == 12) return s.replace(hours, '00').slice(0,8);
        return s.slice(0,8);
    }
}

module.exports = timeConversion