// import m from './module.mjs'
// m()
import md5 from 'md5'
import {
    foo as foo2,
    bar
} from './module.mjs'
const foo=1
foo2()
console.log(foo+bar)

const before='md5 before'
const after=md5(before)
console.log(before+'----'+after)