function solution(num_list) {
    return num_list.reduce((acc, item) => {
        if(item % 2 === 1) acc[1]++;
        else acc[0]++;
        return acc;
    }, [0, 0]);
}