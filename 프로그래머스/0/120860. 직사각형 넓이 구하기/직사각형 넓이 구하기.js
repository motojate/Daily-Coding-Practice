function solution(dots) {
    const x1 = dots[0][0];
    const y1 = dots[0][1];
    
    const height = Math.abs(dots.filter(v => v[0] === x1).reduce((acc, item) => {
        if(acc) acc -= item[1];
        else acc = item[1];
        return acc;
    }, 0));
    const width = Math.abs(dots.filter(v => v[1] === y1).reduce((acc, item) => {
        if(acc) acc -= item[0];
        else acc = item[0];
        return acc;
    }, 0));
    
    return width * height;
}