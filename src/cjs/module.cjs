// module.exports = 'hello world'
// module.exports= function foo(){
//     console.log('hell0')
// }

function foo() {
    console.log('foo 执行函数')
}

const bar = "bar固定值变量"

module.exports = {
    foo,
    bar
}