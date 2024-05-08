function solution(my_string) {
    return [...my_string].reduce((acc, item) => {
        if(item === item.toLowerCase()) acc += item.toUpperCase();
        else acc += item.toLowerCase();
        return acc;
    }, '');
}