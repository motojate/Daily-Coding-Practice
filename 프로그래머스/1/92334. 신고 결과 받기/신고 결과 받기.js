function solution(id_list, report, k) {
    const reportMap = new Map();
    const mailMap = new Map();
    for(const id of id_list) {
        const data = {
            count: 0,
            reporter: []
        }
        reportMap.set(id, data);
    }
    
    for(const reportData of report) {
        const [to, from] = reportData.split(' ');
        const mapData = reportMap.get(from);
        if(!mapData.reporter.includes(to)) {
            reportMap.set(from, {
                count: mapData.count + 1,
                reporter: [...mapData.reporter, to]
            })
        }
    }
    
    for(const [key, value] of reportMap) {
        if(value.count >= k) {
            for(const reporter of value.reporter) {
                const getMailCount = mailMap.get(reporter) ?? 0;
                mailMap.set(reporter, getMailCount + 1);
            }
        }
    }

    return id_list.map(v => mailMap.get(v) ?? 0);
}