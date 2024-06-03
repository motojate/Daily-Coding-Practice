function solution(num_list) {
    return num_list.reduce((acc, item) => {
        acc += Math.floor(Math.log2(item));
        return acc;
    }, 0);
}