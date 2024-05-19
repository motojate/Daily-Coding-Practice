function solution(i, j, k) {
    var answer = 0;
    const kString = k.toString();
    for(let start = i; start <= j; start++) {
        if(start.toString().includes(kString)) {
            const startReplace = start.toString().replaceAll(kString, '');
            answer += start.toString().length - startReplace.length;
        }
    }
    return answer;
}