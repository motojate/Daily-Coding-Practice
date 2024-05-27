function solution(arr) {
    var answer = [];
    const twoCount = arr.filter(v => v === 2).length;
    if(twoCount === 0) return [-1];
    if(twoCount === 1) return [2];
    
    const start = arr.findIndex(v => v === 2);
    const end = arr.length - [...arr].reverse().findIndex(v => v === 2);
    
    return arr.slice(start, end);
}