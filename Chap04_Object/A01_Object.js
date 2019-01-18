// A01_Object.js

var p1 = {name: "HongGildong", age: 20};
console.log(p1);

// 추가
p1.address = "Seoul";
p1.tel = ["010-1234-5678", "010-9876-5432"];
p1.obj = {
    company: "A 주식회사",
    department: "영업부"
}
p1.getInfo = function(){
    return this.name + " " + this.obj.company + " " + this.obj.department
}
console.log(p1);
console.log(p1.age);

var add = "address";
console.log(p1.add);
console.log(p1[add]);
console.log(p1["address"]);

// 삭제
delete p1.age;
console.log(p1);
console.log("");

// 순환
// ES5
var ary = [10, 11, 100, 101];
for(var i in ary){
    console.log(ary[i]);
}
console.log("");


for(var k in p1){
    // k => key
    // p1[k] => value
    console.log(k + " : " + p1[k]);
}