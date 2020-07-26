const readline = require('readline')

function readLine () {
    const rl = readline.createInterface ({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise(resolve => {
        rl.on('line', data => {
            resolve(data.trim().split(' ').map(n => JSON.parse(n)))
            rl.close()
        })
    })
}

const infos = {
    first: [
        { prize: 5000000, size: 1 },
        { prize: 3000000, size: 2 },
        { prize: 2000000, size: 3 },
        { prize: 500000, size: 4 },
        { prize: 300000, size: 5 },
        { prize: 100000, size: 6 }
    ],
    second: [
        { prize: 5120000, size: 1 },
        { prize: 2560000, size: 2 },
        { prize: 1280000, size: 4 },
        { prize: 640000, size: 8 },
        { prize: 320000, size: 16 }
    ]
}

function generatePrizeArray (info) {
    return info.reduce((prev, item) => {
        const { prize, size } = item
        for (let count = 0; count < size; count++) {
            prev.push(prize)
        }
        return prev
    }, [])
}

const first = generatePrizeArray(infos.first)
const second = generatePrizeArray(infos.second)

function predict (rank, prizeArray) {
    if (rank === 0) {
        return 0
    }
    if (rank > prizeArray.length) {
        return 0
    }

    return prizeArray[rank - 1]
}

function predicts (a, b) {
    return predict(a, first) + predict(b, second)
}

async function solution () {
    let lines = await readLine()
    const size = lines[0]
    const testArray = []
    const range = []

    for (let c = 0; c < size; c++) {
        range.push(c)
    }

    for await (let c of range) {
        const value = await readLine()
        testArray.push(value)
    }

    for (let c = 0; c < size; c++) {
        const [a, b] = testArray[c]
        const value = predicts(a, b)
        console.log(value)
    }

    process.exit()
}

solution()

