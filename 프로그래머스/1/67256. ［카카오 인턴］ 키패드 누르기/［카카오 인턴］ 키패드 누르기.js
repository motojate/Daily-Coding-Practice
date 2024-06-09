function solution(numbers, hand) {
    let answer = '';
    let left = [3, 0];
    let right = [3, 2];
    
    const map = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        0: [3, 1]
    }
    
    const setAnswer = (x, y, h) => {
        if(h === 'L') {
            answer += 'L';
            left = [x, y];
        } else {
            answer += 'R';
            right = [x, y];
        }
    }
    
    for(const number of numbers) {
        const [x, y] = map[number];
        if(y === 0) setAnswer(x, y, 'L');
        else if (y === 2) setAnswer(x, y, 'R');
        else {
            const leftDistance = Math.abs(x - left[0]) + Math.abs(y - left[1]);
            const rightDistance = Math.abs(x - right[0]) + Math.abs(y - right[1]);
            if(leftDistance < rightDistance) setAnswer(x, y, 'L');
            else if (rightDistance < leftDistance) setAnswer(x, y, 'R');
            else {
                if(hand === 'left') setAnswer(x, y, 'L');
                else setAnswer(x, y, 'R');
            }
        }
    }
    
    return answer;
}