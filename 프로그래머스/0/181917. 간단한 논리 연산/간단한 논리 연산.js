function solution(x1, x2, x3, x4) {
    return cal(cal(x1, x2, true), cal(x3, x4, true), false);
}

const cal = (x, y, c) => {
    if(c) return x || y;
    else return x && y;
}