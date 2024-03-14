const in1 = [
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
        pref: null,
    },
]

const in2 = [
    {
        pref_id: 13,
        pref_name: '東京',
    },
    {
        pref_id: 26,
        pref_name: '京都',
    },
    {
        pref_id: 27,
        pref_name: '大阪',
    },
    {
        pref_id: 28,
        pref_name: '神戸',
    },
]

/* const data = [
    {
        id: 1,
        name: '山田',
        pref: 27,
        pref_name: '大阪',
    },
    {
        id: 2,
        name: '鈴木',
        pref: 26,
        pref_name: '京都',
    },
    {
        id: 3,
        name: '佐藤',
        pref: 13,
        pref_name: '東京',
    },
    {
        id: 4,
        name: '小林',
        pref: null,
        pref_name: null,
    },
] */

const aarr = in1.map((user) => {
    const pref = in2.find((p) => p.pref_id === user.pref)
    user.pref_name = pref?.pref_name || null
    return user
})

// console.log(aarr)

const ore = {
    age: 23,
    name: 'kojima',
}

// console.log(ore.unko?.taste || 10)
console.log(0 || 10)
