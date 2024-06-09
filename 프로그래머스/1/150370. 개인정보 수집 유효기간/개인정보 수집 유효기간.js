function solution(today, terms, privacies) {
    const map = new Map();
    const answer = [];
    for(const term of terms) {
        const [category, month] = term.split(' ');
        map.set(category, +month);
    }
    
    for(let i = 0; i < privacies.length; i++) {
        const [date, category] = privacies[i].split(' ');
        let [year, month, day] = date.split('.').map(v => Number(v));
        const getMonth = map.get(category);
        
        month += getMonth;
        day -= 1;
        
        if(day === 0) {
            day = 28;
            month -= 1;
        }
        if(month > 12) {
            while(month > 12) {
                month -= 12;
                year += 1;
            }
        }
        
        if(new Date(today) > new Date(`${year}.${month}.${day}`)) answer.push(i + 1);
        
    }
    
    return answer;
}