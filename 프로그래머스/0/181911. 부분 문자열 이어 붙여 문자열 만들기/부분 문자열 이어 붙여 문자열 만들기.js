function solution(my_strings, parts) {
    var answer = '';
    return my_strings.reduce((acc, item, idx) => {
        acc += item.slice(parts[idx][0], parts[idx][1] + 1);
        return acc;
    }, '');
}