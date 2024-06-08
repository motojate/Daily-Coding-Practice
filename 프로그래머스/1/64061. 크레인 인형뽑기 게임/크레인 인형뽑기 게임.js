function solution(board, moves) {
    const stack = [];
    let answer = 0;
    for(const move of moves) {
        const j = move - 1;
        for(let i = 0; i < board.length; i++) {
            const doll = board[i][j];
            
            if(doll !== 0) {
                const peek = stack[stack.length - 1];
                if(peek === doll) {
                    stack.pop();
                    answer += 2;
                } else stack.push(doll);
                
                board[i][j] = 0;
                break;
            }
        }
    }

    return answer;
}