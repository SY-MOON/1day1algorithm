function main() {
    const nd = readLine().split(' ');
    const n = parseInt(nd[0], 10);
    const d = parseInt(nd[1], 10);
    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let temp = a.slice(0, d);
    a.splice(0, d);
    console.log(a.concat(temp).join(" ")); 
}