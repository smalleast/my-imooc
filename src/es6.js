/*

let name = 'mark';
let age = 16;
console.log(`hell ${name},age ${age}`);

function hello(name1, name2) {
    console.log(name1, name2);
}

let arr = ['imooc', 'woniu'];
hello(...arr);


let obj = {name: 'imooc', value: 'woniu'};
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

class MyApp {
    constructor() {
        this.name = 'imooc'
    }

    sayHello() {
        console.log(`hello ${this.name} !`);
    }
}

const app = new MyApp()
app.sayHello()

*/
const arr = [1, 2, 3]
console.log(arr.map(function (v) {
    return v * 2
}));
console.log(arr.map(v => v * 2));