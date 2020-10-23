function solution(numbers) {
    const answer = new Map()
    for (let a in numbers) {
        for (let b in numbers) {

            if (a === b) {
                continue
            }

            const value = Number(numbers[a]) + Number(numbers[b])
            
            if (answer.has(value) === false) {
                answer.set(value, value)
            }
        }
    }
    return Array.from(answer.values()).sort((a, b) => a - b)
}

const numbers = [2, 1, 3, 4, 1]
const answer = solution(numbers)

console.log(answer)