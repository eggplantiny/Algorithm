const [m, n] = [1, 7]
const map = `
f0.F..1
`.split('\n').slice(1, -1).map(l => l.split(''))

// 빈 곳 : 언제나 이동할 수 있다. ('.‘로 표시됨)
// 벽 : 절대 이동할 수 없다. (‘#’)
// 열쇠 : 언제나 이동할 수 있다. 이 곳에 처음 들어가면 열쇠를 집는다. (a - f)
// 문 : 대응하는 열쇠가 있을 때만 이동할 수 있다. (A - F)
// 민식이의 현재 위치 : 빈 곳이고, 민식이가 현재 서 있는 곳이다. (숫자 0)
// 출구 : 달이 차오르기 때문에, 민식이가 가야하는 곳이다. 이 곳에 오면 미로를 탈출한다. (숫자 1)

const findMS = map => {
    let x = y = 0
    for (y = 0; y < map.length; y++) {
        const line = map[y]
        for (x = 0; x < line.length; x++) {
            const t = line[x]
            if (t === '0') {
                return [x, y]
            }
        }
    }
}

function solution (map, m, n) {
    console.log(map)
    const [x, y] = findMS(map)
    const zxc = recursive(map, x, y, 0,{
        a: false,
        b: false,
        c: false,
        d: false,
        e: false
    })
    console.log('result', zxc)
}

//  direction => 0 : up, 1 : right, 2: down, 3 : left
function collisionCheck (map, x, y) {
    try {
        if (x >= map[y].length) {
            return null
        } else if (x < 0) {
            return null
        }
        return map[y][x]
    } catch (e) {
        return null
    }
}

function recursive (map, x, y, value, keys) {
    const t = collisionCheck(map, x, y)

    if (t === null) {
        return []
    } else if (t === '#') {
        return []
    } else if (/[A-F]/.test(t)) {
        if (!keys[t.toLowerCase()]) {
            return []
        } else {
            map[y][x] = '.'
        }
    } else if (/[a-f]/.test(t)) {
        keys[t] = true
        map[y][x] = '.'
    } else if (t === '1') {
        return value
    } else if (t === '.') {
        map[y][x] = '#'
    }

    map[y][x] = '#'

    value += 1
    const up = map => recursive(map, x, y - 1, value, keys)
    const right = map => recursive(map, x + 1, y, value, keys)
    const down = map => recursive(map, x, y + 1, value, keys)
    const left = map => recursive(map,x - 1, y, value, keys)

    return [...up(map), ...right(map), ...down(map), ...left(map)]
}

solution(map, m, n)
