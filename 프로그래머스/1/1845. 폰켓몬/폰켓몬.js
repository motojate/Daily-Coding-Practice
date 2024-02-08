function solution(nums) {
    var answer = 0;
    const numsSetLength = [...new Set(nums)].length;
    const N = Math.floor(nums.length / 2);
    return numsSetLength > N ? N : numsSetLength;
}