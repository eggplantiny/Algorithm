function solution (participant, completion) {
    const dictionary = {}
    participant.forEach(item => {
        if (dictionary[item] === undefined) {
            dictionary[item] = 1
        } else {
            dictionary[item] += 1
        }
    })

    completion.forEach(item => {
        dictionary[item] -= 1

        if (dictionary[item].length === 0) {
            dictionary[item] = null
        }
    })

    return Object.keys(dictionary).filter(key => dictionary[key])[0]
}

const participant = ['mislav', 'stanko', 'mislav', 'ana']
const completion = ['stanko', 'ana', 'mislav']

const answer = solution(participant, completion)

console.log(answer)
