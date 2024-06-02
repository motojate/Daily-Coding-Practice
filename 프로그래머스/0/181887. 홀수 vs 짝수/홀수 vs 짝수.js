function solution(num_list) {
    const { odd, even } = num_list.reduce((acc, item, idx) => {
        if(idx % 2 === 0) acc.odd += item;
        else acc.even += item;
        return acc;
    }, { odd: 0, even: 0 });
    return Math.max(odd, even);
}