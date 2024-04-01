const input1 = {
    abc001: { value: 1 },
    abc002: { value: 2 },
    abc003: { value: 3 },
}
const input2 = {
    attr01: { name: 'シリーズ名' },
    attr02: { name: 'ブランド名' },
    attr03: { name: 'メーカー型番' },
}

/* 
    問題1: input1, input2からoutput1を作る
    問題2: output1からoutput2を作る
*/

/*
    ヒント
    Objectのメソッドが必要
    https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object
*/

const output1 = Object.keys(input2).map((key2) => {
    const { name } = input2[key2]
    const attrId = key2.match(/\d+/)[0]
    const { length } = Object.keys(input1)
    return [...Array(length)].map(() => ({
        name,
        attrId,
        value: '',
    }))
})

// console.log(output1)

// const output1 = [
//     [
//         { name: 'シリーズ名', attrId: '01', value: '' },
//         { name: 'シリーズ名', attrId: '01', value: '' },
//         { name: 'シリーズ名', attrId: '01', value: '' },
//     ],
//     [
//         { name: 'ブランド名', attrId: '02', value: '' },
//         { name: 'ブランド名', attrId: '02', value: '' },
//         { name: 'ブランド名', attrId: '02', value: '' },
//     ],
//     [
//         { name: 'メーカー型番', attrId: '03', value: '' },
//         { name: 'メーカー型番', attrId: '03', value: '' },
//         { name: 'メーカー型番', attrId: '03', value: '' },
//     ],
// ]

const output2 = Object.keys(input1).reduce(
    (previous, current, index) => {
        const attributes = output1[index].map((data) => {
            return {
                ...data,
                value: `${current}-${data.attrId}`,
            }
        })
        previous[current] = { attributes }
        return previous
    },
    {}
)

// console.log(output2)
// console.log(output2.abc001)

// const output2 = {
//     abc001: {
//         attributes: [
//             {
//                 name: 'シリーズ名',
//                 attrId: '01',
//                 value: 'abc001-01',
//             },
//             {
//                 name: 'ブランド名',
//                 attrId: '02',
//                 value: 'abc001-02',
//             },
//             {
//                 name: 'メーカー型番',
//                 attrId: '03',
//                 value: 'abc001-03',
//             },
//         ],
//     },
//     abc002: {
//         attributes: [
//             {
//                 name: 'シリーズ名',
//                 attrId: '01',
//                 value: 'abc002-01',
//             },
//             {
//                 name: 'ブランド名',
//                 attrId: '02',
//                 value: 'abc002-02',
//             },
//             {
//                 name: 'メーカー型番',
//                 attrId: '03',
//                 value: 'abc002-03',
//             },
//         ],
//     },
//     abc003: {
//         attributes: [
//             {
//                 name: 'シリーズ名',
//                 attrId: '01',
//                 value: 'abc003-01',
//             },
//             {
//                 name: 'ブランド名',
//                 attrId: '02',
//                 value: 'abc003-02',
//             },
//             {
//                 name: 'メーカー型番',
//                 attrId: '03',
//                 value: 'abc003-03',
//             },
//         ],
//     },
// }
