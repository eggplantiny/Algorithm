function solution(a, b) {
    if (a === b) {
        return a
    }
    return (Math.abs(a - b) + 1) * ((a + b) / 2)
}