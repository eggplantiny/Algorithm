
const random = require('./utils/random')

const asd = random.getRandomInt(0, 78)

const targetList = [0, 1, 2]

function start () {
    let success = 0
    let count = 0
    let index = 0
    function play () {
        const value = random.getRandomInt(0, 78)

        const target = targetList[index]

        if (target === undefined) {
            success += 1
            index = 0
            return true
        }

        count += 1
        if (value === target) {
            index += 1
        } else {
            index = 0
        }

        return false
    }

    while (success < 2) {
        play()
    }

    return [success, count]
}

let success = 0
let count = 0
for (let c = 0; c < 1000; c++) {
    const [s, c] = start()
    success += s
    count += c
}

const percent = success / count * 100

console.log(`성공: ${success}, 시도횟수: ${count}, 확률: ${percent}%`)
