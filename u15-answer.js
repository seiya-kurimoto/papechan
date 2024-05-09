const nest = [
    {
        header: '商品について',
        node: [
            {
                header: 'シール',
                node: [
                    {
                        q: '1question',
                        a: 'answer',
                    },
                    {
                        q: '2question',
                        a: 'answer',
                    },
                ],
            },
            {
                header: 'ステッカー',
                node: [
                    {
                        header: '価格について',
                        node: [
                            {
                                q: '3question',
                                a: 'answer',
                            },
                            {
                                q: '4question',
                                a: 'answer',
                            },
                        ],
                    },
                    {
                        header: '糊の粘着強度について',
                        node: [
                            {
                                q: '5question',
                                a: 'answer',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        header: '注文について',
        node: [
            {
                q: '6question',
                a: 'answer',
            },
            {
                q: '7question',
                a: 'answer',
            },
        ],
    },
    {
        q: '8question',
        a: 'answer',
    },
    {
        q: '9question',
        a: 'answer',
    },
]

function recursive({ q, a, node }) {
    if (q && a) return { q, a }
    return node.map(recursive)
}

const faq = nest.map(recursive).flat(Infinity)

console.log(faq)
