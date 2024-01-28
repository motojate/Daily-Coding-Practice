function solution(k, score) {
    const buffer = [];
    return score.map((data, idx) => {
        if(idx < k) buffer.push(data);
        else {
            buffer.sort((a, b) => a - b);
            const minResult = buffer[0];
            if(data >= minResult) buffer[0] = data;
        }
        return Math.min(...buffer);
    });
}