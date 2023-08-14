function solution(s){
    var answer = true;
    let resultByP = 0
    let resultByY = 0
   
    s.toLowerCase().split('').map((v) => {
        if(v === 'p') resultByP++
        else if(v === 'y') resultByY++
    })
    
    if(resultByP === resultByY) answer = true
    else answer = false

    return answer;
}