function solution(food) {
    var answer = '';
    for(let i = 1; i < food.length; i++) {
        answer += i.toString().repeat(Math.floor(food[i] / 2));
    }
    const reverseAnswer = answer.split("").reverse().join("");
    answer += ("0" + reverseAnswer);
    return answer;
}