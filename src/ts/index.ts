function getFirstWord(msg: string) {
    console.log(msg.split(' ')[0])
}

getFirstWord('hello world')
// getFirstWord(123)
interface UserItem {
    name: string,
    age?: number,//加？ 代表age这个属性可选，不加的话，如果声明时不带会报错，
    enjoyFoods: string[],
    friendList: UserItem[]
}

var wyd: UserItem = {
    name: "wuyudong",
    age: 26,
    enjoyFoods: ["apple", "banana", "origen"],
    friendList: [
        {
            name: "111",
            age: 20,
            enjoyFoods: ["dsjf", "dsdf"],
            friendList: []

        }
    ]
}

//对象继承，给管理员增加了一个权限等级的属性
interface Admin extends UserItem {
    permissionLevel: number
}

const admin: Admin = {
    name: "wuyudong",
    age: 26,
    enjoyFoods: ["apple", "banana", "origen"],
    friendList: [
        {
            name: "111",
            age: 20,
            enjoyFoods: ["dsjf", "dsdf"],
            friendList: []

        }
        ,
    ],
    permissionLevel: 1
}

interface Admin1 extends Omit<UserItem, 'enjoyFoods' | 'friendList'> {
    permissionLevel: number
}

const admin1: Admin1 = {
    name: "dhajdlf",
    age: 20,
    permissionLevel: 1
}

import { User } from './User'
const peter: User = new User("peter")
console.log(peter.getName())