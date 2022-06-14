export class UserBase {
    name: string
    constructor(name: string) {
        this.name = name
    }
    // 这是一个方法
    getName() {
        console.log(this.name)
    }
}
// 这是一个接口，可以继承自类
interface User extends Omit<UserBase, "getName"
> {
    age: number
}

// 这样这个变量就必须同时存在两个属性
const petter: User = {
    name: 'Petter',
    age: 18,
}

