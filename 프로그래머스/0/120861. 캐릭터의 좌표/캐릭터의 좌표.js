function solution(keyinput, board) {
    const mapper = {
        'left': [0, -1],
        'right': [0, 1],
        'up': [1, 1],
        'down': [1, -1]
    }
    
    return keyinput.reduce((acc, item) => {
        const position = mapper[item][0];
        const move = mapper[item][1];
        if(Math.abs(acc[position] + move) <= (board[position] - 1) / 2) acc[position] += move;
        return acc;
    }, [0, 0]);
}