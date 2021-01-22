
function recursive (n) {
    if (n === 0) {
        return 0
    }
    console.log(n)
    return n + recursive(n - 1)
}

const sum = 2 * recursive(10)

console.log(sum)
