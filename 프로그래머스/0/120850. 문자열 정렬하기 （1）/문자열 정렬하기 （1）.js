function solution(my_string) {
    const regex = /[0-9]/;
    return [...my_string].filter(v => regex.test(v)).sort((a, b) => a - b).map(v => Number(v));
}