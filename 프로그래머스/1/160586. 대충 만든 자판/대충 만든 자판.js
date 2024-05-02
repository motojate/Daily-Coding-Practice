function solution(keymap, targets) {
    var answer = [];
    for(const target of targets) {
        let clickCount = 0;
        for(const str of target) {
            const count = keymap.reduce((acc, item) => {
                acc.push(item.indexOf(str) + 1);
                return acc;
            }, []).filter(t => t !== 0);
            
            if(count.length === 0) {
                clickCount = -1;
                break;
            } else clickCount += Math.min(...count);
        }
        
        answer.push(clickCount);
    }
    return answer;
}