function solution(m, n, board) {
    board = board.map((v) => v.split(''));
    const col = n;
    const row = m;
    let answer = 0;
    
    const changeRow = () => {
        for(let i = 0; i < col; i++) {
            let rowData = '';
            for(let j = 0; j < row; j++) {
                rowData += board[j][i];
            }
            const zeroReplaceStr = replaceZero(rowData);
            for(let k = 0; k < row; k++) {
                board[k][i] = zeroReplaceStr[k];
            }
        }
    }
    
   
    const directions = [[0, 1], [1, 0], [1, 1]];
    
    const isValidSquare = (i, j, data) => {
        return board[i + 1][j] === data && board[i][j + 1] === data && board[i + 1][j + 1] === data;
    }
    
    const blockBoom = () => {
        const deleteSet = new Set();
        for(let i = 0; i < row - 1; i++) {
            for(let j = 0; j < col - 1; j++) {
                const data = board[i][j];
                if(data === '0') continue;
                if(isValidSquare(i, j, data)) {
                    for(let ni = 0; ni <= 1; ni++) {
                        for(let nj = 0; nj <= 1; nj++) {
                            const str = `${i + ni}-${j + nj}`;
                            deleteSet.add(str);
                        }
                    }
                } 
            }
        }
        if(deleteSet.size > 0) {
            answer += deleteSet.size;
            for(const set of deleteSet) {
                const [i, j] = set.split('-').map(Number);
                board[i][j] = '0';
            }
            changeRow();
            blockBoom();
        }
    }
    
    blockBoom();
    return answer;
}

const replaceZero = (str) => {
    const nonZeroPart = str.replace(/0/g, '');
    return '0'.repeat(str.length - nonZeroPart.length) + nonZeroPart;
}