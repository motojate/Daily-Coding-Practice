function solution(expression) {
    const answer = [];
    const opList = ['+', '#', '*'];
    expression = expression.replaceAll('-', '#');
    
    const splitExpression = (expr) => {
        const numbers = expr.match((/[-+]?\d*\.?\d+/g)).map(Number) ?? [];
        const operators = expr.match(/[+#*]/g) ?? [];
        
        return { numbers, operators }
    }
    
    const cal = (a, b, op) => {
        switch(op) {
            case '+':
                return a + b;
            case '#':
                return a - b;
            case '*':
                return a * b;
        }
    }
    
    const calculator = (str, op) => {
        if(op.length === 0) return answer.push(Math.abs(str));
        
        for(let i = 0; i < op.length; i++) {
            const { numbers, operators } = splitExpression(str);
            
            while(operators.includes(op[i])) {
                const idx = operators.indexOf(op[i]);
                const calNum = cal(numbers[idx], numbers[idx + 1], operators[idx]);
                numbers[idx] = calNum;
                numbers.splice(idx + 1, 1);
                operators.splice(idx, 1);
            }
            
            const newStr = numbers.reduce((acc, item, idx) => {
                if(idx !== numbers.length - 1) acc += item + operators[idx];
                else acc += item;
                return acc;
            }, '')
            
            
            calculator(newStr, op.filter((_, j) => i !== j));
        }
        
    }
    calculator(expression, opList);
    
    return Math.max(...answer);
}
