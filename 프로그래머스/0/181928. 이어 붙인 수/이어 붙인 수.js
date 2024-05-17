function solution(num_list) {
    const answer = num_list.reduce((acc, item) => {
        if(item % 2 === 1) acc.odd += item.toString();
        else acc.even += item.toString();
        return acc;
    }, { odd: '', even: '' })
    return +answer.odd + +answer.even;
}