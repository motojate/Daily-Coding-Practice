function solution(nums) {
    const numsSetLength = new Set(nums).size;
    const N = Math.floor(nums.length / 2);
    return numsSetLength > N ? N : numsSetLength;
}