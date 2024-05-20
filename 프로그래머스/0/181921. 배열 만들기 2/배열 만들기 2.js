function solution(l, r) {
    var answer = [];
    for(let i = l; i <= r; i++) {
        let iStr = i.toString();
        iStr = iStr.replaceAll('0', '');
        iStr = iStr.replaceAll('5', '');
        if(iStr.length === 0) answer.push(i);
    }
    return answer.length ? answer : [-1];
}