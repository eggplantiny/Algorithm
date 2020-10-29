function solution (clothes) {
    const map = clothes.reduce((c, [a, b]) => (c.has(b) ? c.get(b).push(a) & null : c.set(b, [a])) || c, new Map())
    const kinds = Array.from(map.keys())
}

const clothes = [['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']]

const answer = solution(clothes)

console.log(answer)
