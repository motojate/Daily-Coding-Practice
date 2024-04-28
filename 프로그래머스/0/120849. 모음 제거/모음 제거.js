function solution(my_string) {
    const gathers = ['a', 'e', 'i', 'o', 'u'];
    return my_string.split('').filter(v => !gathers.includes(v)).join('');
}