function solution(order) {
    const clabArr = ['3', '6', '9'];
    return order.toString().split('').reduce((acc, item) => {
        if(clabArr.includes(item)) acc++;
        return acc;
    }, 0);
}