function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    while(people.length > 0) {
        if(people.length === 1) people.pop();
        else {
            const [light, heavy] = [people[0], people[people.length - 1]];
            if(heavy + light <= limit) people.shift();
            people.pop();
        }
        
        answer++;
    }
    return answer;
}
