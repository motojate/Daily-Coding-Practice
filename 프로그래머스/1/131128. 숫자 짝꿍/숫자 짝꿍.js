function solution(X, Y) {
    const XArr = X.split('');
    const YArr = Y.split('');
    const answer = []
    
    
    for(let i = 0; i < 10; i++) {
        const XLength = XArr.filter(v => +v === i).length;
        const YLength = YArr.filter(v => +v === i).length;
        if(XLength === 0 || YLength === 0) continue;
        for(let j = 0; j < Math.min(XLength, YLength); j++) {
            answer.push(i);
        }
    }
    
    answer.sort((a, b) => b - a);
    
    return answer.length === 0 ? '-1' : answer.join('').startsWith('0') ? '0' : answer.join(''); 
}