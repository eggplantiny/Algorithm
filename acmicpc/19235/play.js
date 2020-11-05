
//  (0, 0), (1, 0) => (3, 0), (3, 1)
//  (0, 0), (0, 1) => (2, 0), (3, 0)

const MAX = 4

function transpose (x1, y1, x2, y2) {
    const maxSize = MAX - 1
    return {
        x1: maxSize - y2,
        y1: y1,
        x2: maxSize,
        y2: x2
    }
}

function show (array) {
    for (let y = 0; y < array.length; y++) {
        let str = ''
        for (let x = 0; x < array[y].length; x++) {
            const value = array[y][x]
            if (value === 1) {
                str += 'X '
            } else {
                str += 'O '
            }
        }
        console.log(str)
    }
    console.log()
}

function dotting (array, dot) {
    array[dot.y][dot.x] = 1
    return array
}

function copy (object) {
    return JSON.parse(JSON.stringify(object))
}

function solution () {
    const array = Array.from(Array(MAX), () => new Array(MAX))
    const a = { x: 1, y: 1 }
    const b = { x: 1, y: 2 }

    const asd = transpose(a.x, a.y, b.x, b.y)


    show(dotting(dotting(copy(array), a), b))
    show(dotting(dotting(copy(array), { x: asd.x1, y: asd.y1 }), { x: asd.x2, y: asd.y2 }))
}

solution()
