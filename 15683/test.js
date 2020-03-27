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

const direction = { up: 1, right: 100, down: 10000, left: 1000000 }
const pkList = [2, 3, 5, 7, 11, 13, 17, 19]
const countZeroArea = lines => lines.flat(1).filter(item => item === 0).length;
const getCctvPos = lines => lines;

(async () => {
    const [N, M] = [4, 6]
    const lines = [ [ 0, 0, 0, 0, 0, 0 ],
                    [ 0, 0, 0, 0, 1, 0 ],
                    [ 0, 0, 1, 0, 6, 0 ],
                    [ 0, 0, 0, 0, 0, 0 ] ]
    const count = countZeroArea(lines)
    console.log(count)
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
