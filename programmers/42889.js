function solution(N, stages) {
    const stageArray = Array(5).fill(0)
    const successArray = Array(5).fill(0)

    for (let n = 0; n < stages.length; n++) {
        const stage = stages[n]

        for (let c = 0; c < stage; c++) {
            if (stageArray[c] !== undefined) {
                stageArray[c] += 1
            }

            if (successArray[c - 1] !== undefined) {
                successArray[c - 1] += 1
            }
        }
    }

    const result = Array(5).fill(0)
    for (let c = 0; c < stageArray.length; c++) {
        result[c] = (stageArray[c] - successArray[c]) / stageArray[c]
    }

    return result.map((v, i) => { return { v, i } }).sort((a, b) => a.v - b.v < 0 ? 1 : -1).map(item => item.i + 1)
}

const stages = [2, 1, 2, 6, 2, 4, 3, 3]
const N = 5

const zxc = solution(N, stages)
console.log(zxc)
