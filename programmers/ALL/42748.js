
function solution(array, commands) {
    return commands.map(([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
}


const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
const answer = solution(array, commands)

console.log(answer)
