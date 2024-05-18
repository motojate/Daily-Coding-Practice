function solution(dots) {
    dots.sort((a, b) => a[0] - b[0]);
    const mx = (dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]);
    const nx = (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0]);
    if(mx === nx) return 1;
    
    dots.sort((a, b) => a[1] - b[1]);
    const my = (dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]);
    const ny = (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0]);
    if(my === ny) return 1;
    
    return 0;
}