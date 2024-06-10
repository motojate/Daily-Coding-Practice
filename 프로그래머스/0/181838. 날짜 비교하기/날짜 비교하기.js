function solution(date1, date2) {
    const dateDate1 = new Date(date1[0] + "-" + date1[1] + "-" + date1[2]);
    const dateDate2 = new Date(date2[0] + "-" + date2[1] + "-" + date2[2]);

    return dateDate1 < dateDate2 ? 1 : 0;
}