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

function fibonacci (n) {
    if (n === 0 || n === 1) {
        return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

function solution (n) {
    return fibonacci(n)
}

async function run () {
    const [n] = await readLine()
    const value = solution(n)
    console.log(value)
}

run()
