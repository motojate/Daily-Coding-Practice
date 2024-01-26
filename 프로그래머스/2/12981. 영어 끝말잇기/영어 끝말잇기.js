function solution(n, words) {
    const buffer = [words[0]];
    const answer = [0, 0];
    for(let i = 1; i < words.length; i++) {
        const item = words[i];
        const prevItem = buffer[buffer.length - 1];
        if(item[0] !== prevItem[prevItem.length - 1] || buffer.includes(item)) {
            answer[0] = i % n + 1;
            answer[1] = Math.floor(i / n) + 1;
            break;
        }
        buffer.push(item);
    }
    return answer;
}