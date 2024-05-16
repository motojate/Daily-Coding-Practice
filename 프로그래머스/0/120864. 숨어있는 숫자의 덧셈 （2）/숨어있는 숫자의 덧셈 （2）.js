function solution(my_string) {
    const regex = /[a-z]/gi;
    const num_string = my_string.replaceAll(regex, ' ');

    return num_string.split(' ').reduce((acc, item) => {
        acc += +item;
        return acc;
    }, 0);
}