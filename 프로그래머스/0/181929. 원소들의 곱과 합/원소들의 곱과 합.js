function solution(num_list) {
    const answer = num_list.reduce((acc, item) => {
        acc.mul *= item;
        acc.sum += item;
        return acc;
    }, { mul: 1, sum: 0 });
    return answer.mul > answer.sum ** 2 ? 0 : 1;
}