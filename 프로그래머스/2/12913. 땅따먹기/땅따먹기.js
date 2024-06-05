function solution(land) {
    const rows = land.length;
    const cols = 4;
    
    for(let i = 0; i < rows - 1; i++) {
        for(let j = 0; j < cols; j++) {
            let maxEl = 0;
            for(let k = 0; k < cols; k++) if(k !== j) maxEl = Math.max(maxEl, land[i][k]);
            land[i + 1][j] += maxEl;
        }
    }
    
    return Math.max(...land[rows - 1]);
}