function solution(n, w, num) {
    const targetFloor = Math.ceil(num / w);
    const loopFloor = Math.ceil(n / w);

    const diff = w * targetFloor - num;
    const targetW = targetFloor % 2 === 1 ? w - diff : 1 + diff;
    const targetWLoopValue = loopFloor % 2 === 1 ? (loopFloor - 1) * w + targetW : loopFloor * w - targetW + 1;

    if (targetWLoopValue <= n) return loopFloor - targetFloor + 1;
    else return loopFloor - targetFloor;
}