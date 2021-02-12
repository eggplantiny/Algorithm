
function distanceBetween2Word (a, b) {
  let sum = a.length
  for (let c = 0; c < a.length; c++) {
    const t1 = a[c]
    const t2 = b[c]

    console.log(`[${c + 1}번째 상자] t1 : ${t1}, t2 : ${t2}`)

    if (t1 === t2) {
      sum -= 1
    }
  }
  return sum
}

        //  성우바보
function recursive (begin, target, words, score) {
  const distance1Items = words.filter(word => distanceBetween2Word(begin, word) === 1)

  if (distance1Items.length === 0) {
    return 0
  }

  if (distance1Items.some(word => word === target)) {
    return score + 1
  }

  //  dist1items = ['성우바보', '성우바부']
  let min = Infinity
  for (let c = 0; c < distance1Items.length; c++) {
    const targetWord = distance1Items[c]
    const nextWords = words.filter(word => word !== targetWord)
    const targetScore = recursive(targetWord, target, nextWords, score + 1)

    if (targetScore > 0) {
      min = targetScore
    }
  }

  if (min === Infinity) {
    return 0
  }

  return min
}

// // const words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
// const words = ["hot", "dot", "dog", "lot", "log"]
// const begin = 'hit'
// const target = 'cog'
//
// const score = recursive(begin, target, words, 0)
//
// console.log(score)


const word1 = '성우바보'
const word2 = '성우천재'

const dist = distanceBetween2Word(word1, word2)

console.log(dist)
