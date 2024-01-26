function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a - b);
    while(people.length > 0) {
        if(people.length === 1) {
            answer++;
            people.pop();
            break;
        }
        const maxWeight = people[people.length - 1];
        const minWeight = people[0];
        if(maxWeight + minWeight <= limit) people.shift();
        people.pop();
        answer++;
    }
    return answer;
}
