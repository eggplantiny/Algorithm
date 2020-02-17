const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
async function readLine () {
    return new Promise(resolve => {
        rl.on('line', input => {
            resolve(input.split(' ').map(n => Number(n)))
        })
    })
}

const COLOR = [
    { name: 'white' },
    { name: 'red' },
    { name: 'blue'}
]

const DIRECTION = [
    { name: 'right' },
    { name: 'left' },
    { name: 'up' },
    { name: 'down' }
]

const MAX_TURN = 1000

let inputStep = 0;

(async () => {
    const [N, K] = await readLine()

    const NN = []

    for (let c = 0; c < N; c++) {
        const numbers = await readLine()
        NN.push(numbers)
    }

    const KK = []

    for (let c = 0; c < K; c++) {
        const numbers = await readLine()
        KK.push(numbers)
    }

    console.log(NN, KK)

    rl.close()
})()
/*
*
4 4
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
1 1 1
1 2 1
1 3 1
1 4 1
* */
