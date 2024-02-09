function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1; i <= number; i++) {
        const divisorPower = getDivisor(i);
        if(divisorPower > limit) answer += power;
        else answer += divisorPower;
    }
    return answer;
}

const getDivisor = (num) => {
    let count = 0;
  for (let i = 1; i * i <= num; i++) { 
    if (num % i === 0) { 
      if (i * i === num) { 
        count++;
      } else { 
        count += 2; 
      }
    }
  }
  return count; 
}