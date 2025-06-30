function solution(diffs, times, limitValue) {
    let min = 1;
    let max = 100_000;

    // 사전 누적 계산
    const timeCosts = [];
    for (let i = 1; i < times.length; i++) {
        timeCosts.push({
            diff: diffs[i],
            cost: (times[i] + times[i - 1]),
            time: times[i]
        });
    }

    const calculator = (level) => {
        let total = times[0]; // 처음은 무조건 포함

        for (const { diff, cost, time } of timeCosts) {
            if (level >= diff) {
                total += time;
            } else {
                total += (diff - level) * cost + time;
            }

            if (total > limitValue) break; // 조기 탈출 (early exit)
        }

        return total;
    };

    // 이분 탐색
    let answer = max;
    while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        const result = calculator(mid);

        if (result <= limitValue) {
            answer = mid;
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return answer;
}