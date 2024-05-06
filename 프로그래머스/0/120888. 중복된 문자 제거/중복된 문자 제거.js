function solution(my_string) {
    return my_string.split('').reduce((acc, item) => {
        if(!acc.includes(item)) acc += item;
        
        return acc;
    }, '');
}