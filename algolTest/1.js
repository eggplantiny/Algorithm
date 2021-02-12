function solution (goods){
    // const comb = recursiveFunction(goods, [])
    // return comb.map(item => item >= 50 ? item - 10 : item).reduce((sum, item) => sum + item, 0)
    const sum = (array) => array.reduce((a, b) => a + b, 0)

    //  4번조건
    if (sum(goods) < 50) {
        return sum(goods)
    }

    const extractOverPrice = (array) => array.filter(item => item >= 50)
    const extractNormalPrice = (array) => array.filter(item => item < 50)
    const overPrices = extractOverPrice(goods)
    const normalPrices = []

    const [a, b, c] = extractNormalPrice
    const values = [sum([a, b]), sum([a, c]), sum([b, c])]  //  [ab, ac, bc]
    const abc = sum([a, b, c])

    if (values[0] >= 50) {
        overPrices.push(values[0])
        normalPrices.push(c)
    } else if (values[1] >= 50) {
        overPrices.push(values[1])
        normalPrices.push(b)
    } else if (values[2] >= 50) {
        overPrices.push(values[2])
        normalPrices.push(a)
    } else if (abc >= 50) {
        overPrices.push(abc)
    }

    console.log(values, overPrices)

    return overPrices.map(item => item - 10).reduce((a, b) => a + b, 0) + sum(normalPrices)
}

const goods = [46, 62, 9]
// const goods = [50,62,93]
// const goods = [5,31,15]
const asd = solution(goods)
console.log(asd)
