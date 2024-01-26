function solution(brown, yellow) {
    const S = brown + yellow;
    const answer = [0, 0];

    for (let width = S - 1; width > 0; width--) {
        if (S % width) continue;

        const height = S / width;
        const y = (width - 2) * (height - 2);
        const b = S - y;

        if (y == yellow && b == brown) {
            answer[0] = width;
            answer[1] = height;
            break;
        }
    }

    return answer;
}