function solution(lines) {
    const lineMap = new Map();
    for(let i = 0; i < lines.length; i++) {
        for(let j = lines[i][0] + 1; j <= lines[i][1]; j++) {
            lineMap.set(j, lineMap.get(j) ? lineMap.get(j) + 1 : 1);
        }
    }
  
    return [...lineMap.values()].filter(v => v > 1).length;
}