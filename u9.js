const arr = [
    {
        rank: 'B',
        score: 20,
    },
    {
        rank: 'A',
        score: 25,
    },
    {
        rank: 'A',
        score: 23,
    },
    {
        rank: 'A',
        score: 24,
    },
]

/*
[
    { rank: 'A', age: 25 },
    { rank: 'A', age: 24 },
    { rank: 'A', age: 23 },
    { rank: 'B', age: 20 }
]
*/
console.log(
    arr.sort((a, b) => {
        if (a.rank !== b.rank)
            return a.rank < b.rank ? -1 : 1
        return b.score - a.score
    })
)

// console.log　コンソールに出力(
//    arr.sort　sortメソッド(a,b　sortメソッドの引数※a,bに適当なリストの項目を代入) => 　関数のなんか{
//     if(a.rank !== b.rank　aランクとbランクが違う場合) return 返す　a.rank < b.rank ?　三項演算子 -1:1
//     return b.score - b.score
//    }

// )
