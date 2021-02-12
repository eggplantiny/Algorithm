function getBitmapClosure (bitmap) {
  bitmap = JSON.parse(JSON.stringify(bitmap))
  return {
    get: (x, y) => bitmap[y][x],
    set: (x, y, value) => {
      bitmap[y][x] = value
    },
    length: bitmap.length,
    bitmap
  }
}

function solution (originalBitmap) {
  const { get, set, length, bitmap } = getBitmapClosure(originalBitmap)

  function find1Index (bitmap) {
    for (let y = 0; y < bitmap.length; y++) {
      const line = bitmap[y]
      for (let x = 0; x < line.length; x++) {
        const target = line[x]

        if (target === 1) {
          return [x, y]
        }
      }
    }

    return null
  }

  function mazeRecursion (currX, currY) {
    if (
      currX < 0 ||
      currX >= length ||
      currY < 0 ||
      currY >= length
    ) {
      return 0
    }

    if (get(currX, currY) === 0) {
      return 0
    }

    set(currX, currY, 0)
    const scores = [
      mazeRecursion(currX, currY - 1),
      mazeRecursion(currX, currY + 1),
      mazeRecursion(currX - 1, currY),
      mazeRecursion(currX + 1, currY),
      1
    ]

    return scores.reduce((sum, score) => score + sum, 0)
  }

  let result = []
  function recursive (score) {
    const item = find1Index(bitmap)

    if (item === null) {
      return 0
    }

    const [x, y] = item

    score += mazeRecursion(x, y)
    result.push(score)
    return score + recursive(0)
  }

  recursive(0)
  return result.sort((a, b) => a - b > 0 ? 1 : -1)
}

const asd = solution([
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1]
])

console.log(asd)
// const zxc = mazeRecursion( 1, 0)

// console.log(zxc)
// console.log(bitmap)
