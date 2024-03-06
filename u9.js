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

// const charA = 'A'
// console.log(charA.charCodeAt())

// const charB = 'B'
// console.log(charB.charCodeAt())

// console.log('A' < 'B')

console.log(
    arr.sort((a, b) => {
        if (a.rank !== b.rank) {
            return a.rank < b.rank ? -1 : 1
        }
        return 0
    })
)

function unko(tinko) {
    console.log(tinko * 2)
}

unko(8)

const manko = (tinko) => {
    console.log(tinko ** 2)
}

manko(10)
