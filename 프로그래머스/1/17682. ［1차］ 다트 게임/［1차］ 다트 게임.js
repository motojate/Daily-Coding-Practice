function solution(dartResult) {
    const answer = [];
    const numRegex = /[0-9]/
    
    for(let i = 0; i < dartResult.length; i++) {
        if(dartResult[i] == 1 && dartResult[i + 1] == 0) {
            answer.push(10);
            i++;
        } else if(dartResult[i].match(numRegex)) {
            answer.push(dartResult[i]);
        } else {
            const curIdx = answer.length - 1;
            const prevIdx = answer.length - 2;
            switch(dartResult[i]) {
                case "S":
                    answer[curIdx] = answer[curIdx];
                    break;
                case "D":
                    answer[curIdx] = answer[curIdx] * answer[curIdx];
                    break;
                case "T":
                    answer[curIdx] = answer[curIdx] * answer[curIdx] * answer[curIdx];
                    break;
                case "*":
                    answer[curIdx] = answer[curIdx] * 2;
                    answer[prevIdx] = answer[prevIdx] * 2;
                    break;
                case "#":
                    answer[curIdx] = answer[curIdx] * (-1);
                    break;
            }
        }
    }
    
    return answer.reduce((acc, item) => {
        acc += +item;
        return acc;
    }, 0);
}