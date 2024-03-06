const arr = [1, 2, 3, [4, 5, [6, 7, 8, 9]], 10, 11, 12]

// 全部の数字を足した値
// 78
// console.log(function kekka() {
//     arr = arr.flat(2)
//     const sum = arr.reduce((a, b) => a + b, 0)
// })

arfl = arr.flat(2)
const sum = arfl.reduce((a, b) => a + b, 0)
console.log(sum)
