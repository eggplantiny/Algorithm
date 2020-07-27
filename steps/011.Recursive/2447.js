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

function starring (n) {
    if (n === 0 || n === 1) {
        return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

function printArray (array, n) {
    for (let y = 0; y < array.length; y++) {
        const target = array[y]
        for (let x = 0; x < array.length; x++) {
            process.stdout.write(target[x])
        }
        console.log()
    }
}

function starting (array, n) {
    if (n === 0) {
        return array
    }

    return starting(array, n - 1)
}

function solution (n) {
    const size = Math.pow(3, n)

    const array = (new Array(size)).fill((new Array(size)).fill('*'))
    return array
}

async function run () {
    const [n] = await readLine()
    const value = solution(n)
    printArray(value)
}

run()
