function dfs (numbers, target, sum, depth) {
    if (depth >= numbers.length) {
        if (sum === target) {
            return 1
        }
        return 0
    }
    
    return dfs (numbers, target, sum + numbers[depth], depth + 1) + 
        dfs (numbers, target, sum - numbers[depth], depth + 1)
}

function solution (numbers, target) {
    return dfs (numbers, target, numbers[0], 1) + dfs (numbers, target, -1 * numbers[0], 1)
}

const numbers = [1, 1, 1, 1, 1]
const target = 3

console.log(`Answer: ${solution(numbers, target)}`)