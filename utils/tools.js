const readline = require('readline');
const fs = require('fs')

async function readLine () {
    const rl = readline.createInterface ({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    })

    return new Promise(resolve => {
        rl.on('line', data => {
            resolve(data.trim().split(' ').map(n => JSON.parse(n)))
            rl.close()
        })
    })
}

module.exports = {
    readLine
}
