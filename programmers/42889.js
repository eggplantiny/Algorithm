function solution(N, stages) {
    const stageArray = Array(5).fill(0)

    for (let n = 0; n < stages.length; n++) {
        const s = stages[n]
        let c = 0
        while (c < s) {
            stageArray[c++] += 1
        }
        // for (let c = 0; c < stages[n]; c++) {
        //     stageArray[c] += 1
        // }
    }

    return stageArray;
}

const stages = [2, 1, 2, 6, 2, 4, 3, 3]
const N = 5

const zxc = solution(N, stages)
console.log(zxc)
