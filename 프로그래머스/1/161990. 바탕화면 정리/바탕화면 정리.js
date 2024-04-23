function solution(wallpaper) {
    const startPoint = [];
    const endPoint = [];
    wallpaper.forEach((v, idx) => {
        v.split('').forEach((str, i) => {
            if(str === '#') {
                endPoint.push(i, i + 1);
                startPoint.push(idx, idx + 1);
            }
        }) 
    })
  
    return [Math.min(...startPoint), Math.min(...endPoint), Math.max(...startPoint), Math.max(...endPoint)];
}