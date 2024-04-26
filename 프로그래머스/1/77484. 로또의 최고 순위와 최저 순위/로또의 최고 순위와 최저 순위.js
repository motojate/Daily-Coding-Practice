function solution(lottos, win_nums) {
    var answer = [];
    let matchedCount = 0;
    
    for(let i = 0; i < lottos.length; i++) {
        if(win_nums.includes(lottos[i])) matchedCount++;
    }
    
    const jokerCount = lottos.filter(v => v === 0).length;
    
    const checkRank = (x) => {
        switch(x) {
            case 6:
                return 1;
            case 5:
                return 2;
            case 4:
                return 3;
            case 3:
                return 4;
            case 2:
                return 5;
            case 1:
            case 0:
                return 6;
                
        }
    }
  
    
    return [checkRank(matchedCount + jokerCount), checkRank(matchedCount)];
}