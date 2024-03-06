const arr = [
    {
        id: 1,
        name: '山田',
        pref: 27,
    },
    {
        id: 2,
        name: '鈴木',
        pref: 26,
    },
    {
        id: 3,
        name: '佐藤',
        pref: 13,
    },
    {
        id: 4,
        name: '小林',
        pref: 27,
    },
    {
        id: 5,
        name: '伊藤',
        pref: 13,
    },
]

// prefの値を取り出して、重複を排除して、昇順に並び替える
// [ 13, 26, 27 ]

const arr2 = arr
    .map((user) => user.pref)
    .sort((a, b) => a - b)
    .reduce(
        (accumulator, currentValue) =>
            accumulator.includes(currentValue)
                ? accumulator
                : accumulator.concat(currentValue),
        []
    )

const arr3 = [
    ...new Set(
        arr.map((user) => user.pref).sort((a, b) => a - b)
    ),
]

// const arr4 = arr3.filter(a !== b)
console.log(arr3)

// const arr2 = arr.map((user リストの中の項目を取得) => user.pref　user内のprefをリターン※アロー関数ではこれでもリターンになる)
// console.log(arr2)
