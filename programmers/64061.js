const closure = (board) => {
    return (move) => {
        let result = null
        for (let y = 0; y < board.length; y++) {
            const v = board[y][move]
            if (v === 0) {
                continue
            }

            result = v
            board[y][move] = 0
            break
        }

        return result
    }
}

function cleanDuplicatedItems (array, c, sum) {
    if (c >= array.length - 1 || array.length === 0) {
        return sum
    }
    
    if (array[c] === array[c + 1]) {
        array[c] = null
        array[c + 1] = null
        sum += 2
        c -= 2
    }

    return cleanDuplicatedItems(array.filter(item => item), c + 1, sum)
}

function solution(board, moves) {
    return cleanDuplicatedItems(moves.map(move => closure(board)(move - 1)).filter(item => item), 0, 0)
}

const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
const moves = [1,5,3,5,1,2,1,4]

const answer = solution(board, moves)

console.log(answer)

// const a = [1, 1]
// const zx = cleanDuplicatedItems(a, 0, 0)
// console.log(zx)