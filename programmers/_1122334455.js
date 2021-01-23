const boxes = [
  [1, 1, 3, 3],
  [2, 2, 4, 4],
  [1, 6, 5, 7],
  [3, 3, 5, 5]
]

function distanceBetweenDots (dot1, dot2) {
  return Math.sqrt(
Math.pow(dot2[0] - dot1[0], 2) +
    Math.pow(dot2[1] - dot1[1], 2)
  )
}

function calcWidth (box) {
  return distanceBetweenDots([box[0], box[3]], [box[2], box[3]])
}

function calcHeight (box) {
  return distanceBetweenDots([box[0], box[3]], [box[0], box[1]])
}

function collisionTest (box1, box2) {
  const box1Width = calcWidth(box1)
  const box1Height = calcHeight(box1)
  const box2Width = calcWidth(box2)
  const box2Height = calcHeight(box2)

  return !(
    ((box1[3] + box1Height) <= box2[3]) ||
    (box1[3] >= (box2[3] + box2Height)) ||
    ((box1[0] + box1Width) <= box2[0]) ||
    (box1[0] >= (box2[0] + box2Width))
  )
}

function solution (boxes) {
  const okBoxes = []
  const okBoxIndexes = []
  for (let c = 0; c < boxes.length; c++) {
    const targetBox = boxes[c]
    if (okBoxes.every(b1 => !collisionTest(b1, targetBox))) {
      okBoxes.push(targetBox)
      okBoxIndexes.push(c)
    }
  }
  return okBoxIndexes
}

// const zxc = solution([[1, 1, 3, 3], [2, 2, 4, 4], [1, 6, 5, 7], [3, 3, 5, 5]])
//
// console.log(zxc)

const box1 = [2, 2, 4, 4]
const box2 = [1, 6, 5, 7]

const zxc = collisionTest(box1, box2)

console.log(zxc)
