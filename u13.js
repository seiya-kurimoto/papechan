class Calc {
    constructor(a) {
        this.suji = a
    }

    sum(a) {
        this.suji += a
        return this
    }
    sub(a) {
        this.suji -= a
        return this
    }
    div(a) {
        this.suji /= a
        return this
    }
}

const c1 = new Calc(10)
const c2 = new Calc(10)

console.log('unko')
console.log('majiko')
