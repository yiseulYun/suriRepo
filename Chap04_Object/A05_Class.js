// A05_Class.js

function Person(name, age){
    this.name = name;
    this.age = age;

    // private
    var address = "Seoul";

    this.getInfo = function(){
        return this.name + " : " + this.age + " : " + address;
    }
}

// prototype chain. 인스턴스 별로 메서드를 만들지 않고
// 클래스마다 딱 1개만 만들고 참조만 돌려준다
Person.prototype.getAge = function(){
    return this.age;
}

var hong = new Person("Hong", 20);
var nolBu = new Person("NolBu", 40);

console.log(hong.name, hong.age);
console.log(hong.address);
console.log(hong.getInfo());

console.log(hong.getAge());


console.log(nolBu.name, nolBu.age);
console.log(nolBu.address);
console.log(nolBu.getInfo());

console.log(nolBu.getAge());