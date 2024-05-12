function solution(elements) {
    const answer = new Set();
    const circular = elements.concat(elements);
    for(let i = 0; i < elements.length; i++) {
        for(let j = 0; j < circular.length; j++) {
            const newNumArr = circular.slice(j, j + i + 1);
            const newNum = newNumArr.reduce((acc, item) => {
                acc += item;
                return acc;
            }, 0);
            answer.add(newNum);
        }
    }
    
    return answer.size;
}