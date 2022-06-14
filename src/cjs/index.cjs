console.log('helloworld wyd')
// const m=require('./module.cjs')
// console.log(m)
const m = require('./module.cjs')
console.log(m.foo())
console.log(m.bar)

//es6对象解构可以这样写
const {
    foo: sds,//es6特点 这样写可以给给foo重命名操作
    bar
} = require('./module.cjs')

console.log(bar)
sds()