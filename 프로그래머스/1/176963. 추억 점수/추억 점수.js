function solution(name, yearning, photo) {
    const newMap = new Map();
    name.forEach((data, idx) => {
        newMap.set(data, yearning[idx]);
    })
    return photo.reduce((acc, data) => {
        const a = data.reduce((v, item) => {
            v += newMap.get(item) ?? 0;
            return v;
        }, 0);
        acc.push(a);
        return acc;
    }, [])
}