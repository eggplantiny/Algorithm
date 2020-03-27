const tools = require('../utils/tools');
require('../utils/polyfill');

const pkList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
const countZeroArea = lines => lines.flat(1).filter(item => item === 0).length;

(async () => {
    const [N, M] = [4, 6]
    const lines = [ [ 0, 0, 0, 0, 0, 0 ],
                    [ 0, 0, 0, 0, 0, 0 ],
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
