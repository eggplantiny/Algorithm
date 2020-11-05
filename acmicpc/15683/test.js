const tools = require('../utils/tools');
require('../utils/polyfill');

/*
* 최대 (8, 4) permutation 하는 문제
* ex) 3개 CCTV 있다고 가정하면,
* (3, 4) permutation 하면 됨
* 1 1 1 -> 1 1 2 -> 1 1 3 -> 1 1 4 ->
* 1 2 1 -> 1 2 2 -> 1 2 3 -> 1 2 4 ->
* ...
* 4 3 1 -> 4 3 2 -> 4 3 3 -> 4 3 4 ->
* 4 4 1 -> 4 4 2 -> 4 4 3 -> 4 4 4
* */

const cctvTypes = [1, 2, 3, 4 ,5]
const dList = [1, 100, 10000, 1000000] // up, right, down, left
const pkList = [2, 3, 5, 7, 11, 13, 17, 19]
const countZeroArea = matrix => matrix.flat(1).filter(item => item === 0).length;
const calcValue = (cctv, pk, direction) => cctv * pk * dList[direction]
const toggleMap = (matrix, cctv) => {

}
const generateValueMap = (matrix, cctvs) =>
    cctvs.reduce(
        (prev, cctv) => {
            prev[cctv.y][cctv.x] = cctv.value;
            return prev
        },
    JSON.parse(JSON.stringify(matrix)))
const getCctvPos = matrix => {
    const res = []
    let pkIndex = 0
    for (const [y, xLine] of matrix.entries()) {
        for (const [x, type] of xLine.entries()) {
            if (cctvTypes.some(target => target === type)) {
                const pk = pkList[pkIndex]
                const direction = 0
                const value = calcValue(type, pk, direction)
                const item = { type, x, y, pk, direction, value  }
                res.push(item)
                pkIndex += 1
            }
        }
    }
    return res
}
const initMatrix = (lines, X) => {
    const matrix = []
    const border = new Array(X + 2).fill(-1)
    matrix.push(border)
    matrix.push(...lines.map(item => { item.unshift(-1); item.push(-1); return item }))
    matrix.push(border)
    return matrix
}

(async () => {
    const [Y, X] = [6, 4]
    const lines = [
        [ 0, 0, 0, 0 ],
        [ 1, 0, 0, 6 ],
        [ 0, 1, 5, 0 ],
        [ 0, 5, 1, 0 ],
        [ 6, 0, 0, 1 ],
        [ 0, 0, 0, 0 ]
    ]

    const matrix = initMatrix(lines, X)
    const count = countZeroArea(matrix)
    const cctvs = getCctvPos(matrix)
    const map = generateValueMap(matrix, cctvs)
    console.log(matrix)
    console.log(map)
})()

// (async () => {
//     const [N, M] = await tools.readLine()
//     const lines = []
//
//     for await (let c of new Array(N)) {
//         const line = await tools.readLine()
//         lines.push(line)
//     }
//
//     console.log(lines)
// })()
