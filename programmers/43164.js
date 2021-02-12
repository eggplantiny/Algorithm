
function compare2words (word1, word2) {
  let result = null
  for (let c = 0; c < word1.length; c++) {
    const t1 = word1[c]
    const t2 = word2[c]

    if (t1 > t2) {
      result = word2
      break
    } else if (t1 < t2) {
      result = word1
      break
    }
  }
  return result
}

function recursive (target, tickets, answer) {
  answer.push(target)
  if (tickets.length === 0) {
    return answer
  }

  const targets = tickets.filter(([dept, _]) => dept === target)

  let targetIndex = 0
  if (targets.length > 1) {
    for (let c = 1; c < targets.length; c++) {
      const [_, t1] = targets[targetIndex]
      const [__, t2] = targets[c]

      const c2w = compare2words(t1, t2)

      if (c2w === t1) {
      } else {
        targetIndex = c
      }
    }
  }

  const [dept, dest] = targets.splice(targetIndex, 1)[0]
  tickets = tickets.filter(([dept2, dest2]) => `${dept2}-${dest2}` !== `${dept}-${dest}`)
  return recursive(dest, tickets, answer)
}

function solution(tickets) {
  return recursive('ICN', tickets, [])
}

const tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]

const zxc = solution(tickets)

console.log(zxc)
