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

function factorial (n) {
    if (n > 1) {
        return factorial(n - 1) * n
    } else {
        return 1
    }
}

function solution (n) {
    return factorial(n)
}

async function run () {
    const [n] = await readLine()
    const value = solution(n)
    console.log(value)
}

run()
