
const clousure = (target) => {
    let c = 0;
    return () => {
        if (c >= target.length) {
            c = 0
        }
        return target[c++]
    }
}

function solution (answers) {
    const cla = [
        clousure([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]),
        clousure([2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5]),
        clousure([3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5])
    ]

    const score = [{ id: 1, s: 0 }, { id: 2, s: 0 }, { id: 3, s: 0 }]
    let max = 0

    answers.forEach(answer => {
        for (let c = 0; c < 3; c++) {
            if (cla[c]() === answer) {
                score[c].s += 1
                if (score[c].s > max) {
                    max = score[c].s
                }
            }
        }
    })

    return score.filter(item => item.s === max).map(item => item.id).sort((a, b) => a - b)
}

const a = [1,2,3,4,5]
// const a = [1,3,2,4,2]
const result = solution(a)

console.log(result)